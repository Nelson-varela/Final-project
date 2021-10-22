import React from 'react'
import { useSelector } from 'react-redux';
import { Post } from './Post';

export const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.postReducer);

    return (
        <div>
        {
            posts.map((post)=> (
                <div key={post._id}>
                <Post post={post} setCurrentId={setCurrentId}/>
                </div>
            ))
        }
            
        </div>
    )
}
