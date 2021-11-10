import React from 'react'
import { useSelector } from 'react-redux';
import { Novelty } from './Novelty';

export const Novelties = () => {

    const novelties = useSelector((state) => state.novelties);

    return (
        <div>
        {
            novelties.reverse().map((novelty)=> (
                <div key={novelty._id}>
                <Novelty  novelty={novelty} />
                </div>
            ))
        }
             
        </div>
    )
}
