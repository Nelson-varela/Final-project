import React from 'react'
import moment from 'moment';




export const Novelty = ({ novelty }) => {

    moment.locale('es');

    const user = JSON.parse(localStorage.getItem('profile'));
   


    return (
       <div>
      {
        (user?.result.roll === 'Administrador') 
        && 
        (
        <div className="card card-header mb-2" style= {{width:""}}>
        <div className="card-body">
          <h5 className="card-title">{novelty.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{moment(novelty.createdAt).fromNow()} por: {novelty.name}</h6>
          <p className="card-text">{novelty.message}</p>
          <p className="card-link">{novelty.selectedFile}</p>
        </div>
        
        </div>
        )
      }
      </div>
        
      
               
    )
}