import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {ThumbsupIcon, CommentDiscussionIcon, TrashIcon} from '@primer/octicons-react'

import { likePost, deletePost } from '../../actions/posts';



export const Post = ({ post, setCurrentId }) => {

    moment.locale('es');

    const dispatch = useDispatch();


    return (
        <div className=" position-relative">
            <div className="card card-header mx-auto" style={{maxWidth: "650px"}}>
            <h6 className="mx-2 mt-2">{moment(post.createdAt).fromNow()} por: {post.name} Admin</h6>
                <h5 className="mx-2 mt-2">{post.title}</h5>
                <img src={post.selectedFile} className="card-img" alt={''}/>
                    <div className="card-body">
                        <p className="card-text">{post.message}</p>
                        <p>{post.tags.map((tag) => `#${tag} `)}</p>
                            <div className="row">
                        <p className="col-3 pe-auto" 
                        onClick={() => dispatch(likePost(post._id))}><ThumbsupIcon size={16}/> Like {post.likeCount}</p> 
                        <p className="col-4 pe-auto"><CommentDiscussionIcon   size={16}/> Comentar</p>
                        <p className="col-5 pe-auto" 
                        onClick={() => dispatch(deletePost(post._id))}><TrashIcon size={16}/> Borrar</p>
                            </div>
                        </div>
                    </div>
               </div>
               
    )
}
