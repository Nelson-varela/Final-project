import React, { useEffect } from 'react'
import { Redirect, useHistory } from 'react-router';

import './app.css';
import { AppRouter } from './Routes/AppRouter';


export const TrackMeApp = () => {

    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('profile'));
        const token = user?.token

        if(token){
             
            Redirect('') 
        } 
      }, [user]);

   

    return (
        
            <AppRouter/>
            
          

            
        
    )
}


