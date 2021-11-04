import React from 'react'
import { useSelector } from 'react-redux';
import { Novelty } from './Novelty';

export const Novelties = ({setCurrentId}) => {

    const novelties = useSelector((state) => state.novelties);

    return (
        <div>
        {
            novelties.map((novelty)=> (
                <div key={novelty._id}>
                <Novelty  novelty={novelty} setCurrentId={setCurrentId}/>
                </div>
            ))
        }
            
        </div>
    )
}
