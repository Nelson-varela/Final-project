import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { logginSession, logoutSession } from '../../actions/sessions';

import { CreatePost } from './CreatePost';
import { Posts } from './Posts';

export const PostScreen = () => {

    const [currentId, setCurrentId] = useState(0);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);
//////Seccion de manejo de hora de entrada y salida  a trabajar. 
     //Manejo de la hora de loggin
     const [logginTime, setLogginTime] = useState('')
     const user = JSON.parse(localStorage.getItem('profile'));

     const logs = useSelector((state) => state.logs);
     console.log(logs)
     
     const handleLogginTime = (e) => {

        e.preventDefault();
        
        const token = user?.token
        if (token){
            
           dispatch(logginSession({ ...logginTime, name: user?.result?.name }));
        }

        setLogginTime(null)

    }

    //// manejo de la hora de desloggeo
    const [logoutTime, setLogoutTime] = useState('')

   const handleLogoutTime = () => {
    const token = user?.token
    if (token) {
        dispatch(logoutSession({ ...logoutTime, name: user?.result?.name  }));
        //intenta gregar un estado que diga conectado/desconectado
    }
    setLogoutTime(null) 
    }

    /////// fin de la seccion de hora de entrada y salida de trabajar
     
    
    return (
        <div>
            <div className="row">
                <div className="col-8">
                <h2 className="sticky-top">Zona de Comunicados DroneTop</h2>
                </div> 
              <div className="col-4 px-3 position-absolute top-20 end-0">
                <button
                onClick={handleLogginTime}
                className="btn-sm btn-primary mx-2">Iniciar Labor</button>
                <button 
                onClick={handleLogoutTime}
                className="btn-sm btn-danger">Terminar Labor</button>

                {
                    logs.active === true 
                    &&

                  <h6 className="text-danger text-center mt-1">Labor iniciada</h6>
                  
                
                 }  
                 {
                    logs.active === false 
                    &&

                  <h6 className="text-danger text-center mt-1">Labor Terminada</h6>
                  
                
                 }  


              </div>
            </div>
                <hr />
                <div className="row">
                    <div className="col-3">
                       <CreatePost currentId={currentId} setCurrentId={setCurrentId} />
                    </div>

                   <div className="col-9" >
                   <Posts  setCurrentId={setCurrentId}/>
                    </div>
                </div> 
                 
        </div>


        
        
    
    )
}
