import React from 'react'
import { useSelector } from 'react-redux';


export const LogReportsScreen = () => {

    const logs = useSelector((state) => state.logs);
     console.log(logs)

    

    return (
        <div>
            <h1>LogReportsScreen</h1>
            
        </div>
    )
}
