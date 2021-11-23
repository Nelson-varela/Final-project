import React, { useEffect } from 'react'
import { Redirect } from 'react-router';

import './App.css';
import { AppRouter } from './Routes/AppRouter';

export const TrackMeApp = () => {
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
