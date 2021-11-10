import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {ThumbsupIcon, TrashIcon, PencilIcon} from '@primer/octicons-react'

import { likePost, deletePost } from '../../actions/posts';
import { Comments } from './Comments';



export const Post = ({ post }) => {

    moment.locale('es');
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));


     const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?._id)) ? (
            <><ThumbsupIcon size={16}/>&nbsp;{post.likes.length > 2 ? `Tú y ${post.likes.length - 1} más` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbsupIcon size={16} />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );

          }
          return <><ThumbsupIcon size={16} />&nbsp;Like</>;
        }  

    return (
      <div className="row">
                <div className="col-7">
        <div className=" position-relative">
            <div className="card card-header mb-3" style={{maxWidth: "550px"}}>
            <h6 className="mx-2 mt-2 text-muted">{moment(post.createdAt).fromNow()} por: <strong className="text-primary">{post.name}</strong> </h6>
                <h5 className="mx-2 mt-2">{post.title}</h5>
                <img src={post.selectedFile} className="card-img" alt={''}/>
                    <div className="card-body">
                        <p className="card-text fst-italic">{post.message}</p>
                         <p>{post.tags.map((tag) => `#${tag} `)}</p> 
                            <div className="row">
                    
                        <button className="col-3 pe-auto btn-sm btn-outline-primary"  disabled={!user?.result}
                         onClick={() => dispatch(likePost(post._id))}>
                            
                         <Likes />  
                            
                        </button>
                     
                        
                        { (user?.result?._id === post?.creator) && (
                        <button className="col-3 pe-auto btn-sm btn-outline-danger" 
                        onClick={() => dispatch(deletePost(post._id))}><TrashIcon size={16}/> Borrar</button>
                        )}
                        {/* { (user?.result?._id === post?.creator) && (
                        <button className="col-3 pe-auto btn-sm btn-outline-info" 
                        ><PencilIcon size={16} /> Editar</button>
                        )} */}
                        <p className="col-3 position-absolute bottom-0 end-0">{post.comments.length} Comentarios</p>
                        
                            </div>
                        </div>
                    </div>
               </div>
               </div>
               <div className="col-5">
                 <Comments   post={post} />



               </div>
      </div>
               
    )
}
