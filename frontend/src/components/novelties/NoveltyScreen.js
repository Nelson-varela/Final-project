import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getNovelties } from '../../actions/novelties';
import useTitle from '../../hooks/useTitle';
import { CreateNovelty } from './CreateNovelty'
import { Novelties } from './Novelties';

export const NoveltyScreen = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    useTitle({title: 'Novedades'})

     useEffect(() => {
        dispatch(getNovelties());
      }, [currentId, dispatch]); 
      setCurrentId(null)

      

    return (
        
            <div className="row">
                <div className="col-5">
            <CreateNovelty currentId={currentId} />
                </div>
            

            <div className="col-7">
               <Novelties />
            </div>
           
            
        </div>
    )
}
