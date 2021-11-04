import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getNovelties } from '../../actions/novelties';
import { CreateNovelty } from './CreateNovelty'
import { Novelties } from './Novelties';

export const NoveltyScreen = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNovelties());
      }, [currentId, dispatch]);


    return (
        
            <div className="row">
                <div className="col-5">
            <CreateNovelty currentId={currentId} setCurrentId={setCurrentId}/>
                </div>
            

            <div className="col-7">
               <Novelties  setCurrentId={setCurrentId}/>
            </div>
           
            
        </div>
    )
}
