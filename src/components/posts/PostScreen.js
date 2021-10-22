import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import { CreatePost } from './CreatePost';
import { Posts } from './Posts';

export const PostScreen = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);
     
    
    return (
        <div>
                <h2>Zona de Comunicados DroneTop</h2>
                <hr />
                <div className="row">
                    <div className="col-3">
                       <CreatePost currentId={currentId} setCurrentId={setCurrentId} />
                    </div>

                   <div className="col-9">
                   <Posts  setCurrentId={setCurrentId}/>
                    </div>
                </div> 
                 
        </div>


        
        
    
    )
}
