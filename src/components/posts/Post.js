import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {ThumbsupIcon, CommentDiscussionIcon, TrashIcon, PencilIcon} from '@primer/octicons-react'

import { likePost, deletePost } from '../../actions/posts';



export const Post = ({ post, setCurrentId, }) => {

    moment.locale('es');
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));


     /* const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?._id)) ? (
            <><ThumbsupIcon size={16}/>&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbsupIcon size={16} />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );

          }
          return <><ThumbsupIcon size={16} />&nbsp;Like</>;
        }  */

    return (
        <div className=" position-relative">
            <div className="card card-header mb-3" style={{maxWidth: "550px"}}>
            <h6 className="mx-2 mt-2">{moment(post.createdAt).fromNow()} por: {post.name}</h6>
                <h5 className="mx-2 mt-2">{post.title}</h5>
                <img src={post.selectedFile} className="card-img" alt={''}/>
                    <div className="card-body">
                        <p className="card-text">{post.message}</p>
                        <p>{post.tags.map((tag) => `#${tag} `)}</p>
                            <div className="row">
                    
                        <button className="col-3 pe-auto btn-sm btn-outline-primary"  disabled={!user?.result}
                        disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                            <ThumbsupIcon size={16}/> Me Gusta  {post.likeCount}
                         {/* <Likes />   */}
                            
                        </button>
                     
                        <button className="col-3 pe-auto btn-sm btn-outline-success "><CommentDiscussionIcon   size={16}/> Comentar</button>
                        { (user?.result?._id === post?.creator) && (
                        <button className="col-3 pe-auto btn-sm btn-outline-danger" 
                        onClick={() => dispatch(deletePost(post._id))}><TrashIcon size={16}/> Borrar</button>
                        )}
                        { (user?.result?._id === post?.creator) && (
                        <button className="col-3 pe-auto btn-sm btn-outline-info" 
                        ><PencilIcon size={16} /> Editar</button>
                        )}
                        
                            </div>
                        </div>
                    </div>
               </div>
               
    )
}
