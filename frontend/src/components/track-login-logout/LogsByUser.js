import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSessionsByUser } from '../../actions/sessions';


const LogsByUser = () => {
  const dispatch = useDispatch();
  const sessions = useSelector(state => state.sessions);
  const { userId } = useParams();
  // ToDo: get user to show name in view
  useEffect(() => {
    dispatch(getSessionsByUser(userId));
  }, []);

  const calculateTimeBetweenDates = (startDate, endDate) => {
    const sD = new Date(startDate);
    const eD = new Date(endDate);
    return Math.floor((eD.getTime() - sD.getTime()) / 1000);
  }

  return (
    <div>
     
      {
        sessions.map((s, idx) => (
          <div key={`session-${idx}-by-${userId}`}>
             <h3>logueo de {s.name} //poner dia y mes</h3>
             <hr />
            <p>
              Hora de Loggin: {s.loginDate}
            </p>
            <p>
              Hora de Logout: {s.logoutDate}
            </p>
            <p>
              Tiempo trabajado: {calculateTimeBetweenDates(s.loginDate, s.logoutDate)} segundos
            </p>
            <hr/>
          </div>
        ))
      }
    </div>
  )
};

export default LogsByUser;
