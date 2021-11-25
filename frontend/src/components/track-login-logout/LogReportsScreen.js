import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSessions } from '../../actions/sessions';

export const LogReportsScreen = () => {
  const sessions = useSelector((state) => state.sessions);
  const dispatch = useDispatch();
  const history = useHistory();

  
  // ToDo: change this view to get Users instead sessions
  useEffect(() => {
    dispatch(getSessions());
  }, []);

  const handleClick = userId => {
    history.push(`/report/${userId}`);
  }

  
  
  return (
    <div>
      <h1>Reporte de Logueo</h1>
      <hr />
      
      {
        sessions.reverse().map((session, idx) => (
          <div key={`session-${idx}`}>
            <p>
              <span>ID del Usuario: </span>
              <span>{session.userId}</span>
            </p>
            { 
            
            <p>
              <span>Nombre del Usuario: </span>
              <span>{session.name}</span>
            </p>

            
              
              }
            <p>
              <span>Hora de Loggin: </span>
              <span>{session.loginDate}</span>
            </p>
            <p>
              <span>Hora de Logout: </span>
              <span>{session.logoutDate}</span>
            </p>
            <button className="btn btn-warning"onClick={() => handleClick(session.userId)}>Ver todos los logs por usuario: {session.name}</button>
            <hr/>
          </div>
        ))
      }
    </div>
  )
}
