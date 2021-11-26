import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useTitle from '../../hooks/useTitle';


import { CreatePost } from './CreatePost';
import { Posts } from './Posts';

export const PostScreen = () => {

  const [currentId, setCurrentId] = useState(0);  
  const dispatch = useDispatch();
  useTitle({title: 'Home'})

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h2 className="sticky-top">Zona de Comunicados DroneTop</h2>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-3">
            <CreatePost currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className="col-9" >
          <Posts setCurrentId={setCurrentId}/>
        </div>
      </div>    
    </div>
  )
}
