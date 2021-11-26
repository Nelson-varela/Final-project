import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSessionsByUser } from '../../actions/sessions';

import moment from 'moment';
import useTitle from '../../hooks/useTitle';


const LogsByUser = () => {
  const dispatch = useDispatch();
  const sessions = useSelector(state => state.sessions);
  const { userId } = useParams();
  useTitle({title: 'Reporte por usuario'})
  moment.locale('es');


  
  useEffect(() => {
    dispatch(getSessionsByUser(userId));
  }, []);

  const calculateTimeBetweenDates = (startDate, endDate) => {
    const sD = new Date(startDate);
    const eD = new Date(endDate);
    return Math.floor((eD.getTime() - sD.getTime()) / 1000 /60);
  }

  return (
    <div>
     
      {
        sessions.reverse().map((s, idx) => (
          <div key={`session-${idx}-by-${userId}`}>
             <h3>Logueo de {s.name} del {moment(s.loginDate).format('LL')}</h3>
             <hr />
            <p>
              Hora de Loggin: {moment(s.loginDate).format('LT')}
            </p>
            <p>
              Hora de Logout: {moment(s.logoutDate).format('LT')}
            </p>
            <p>
              Tiempo trabajado: {calculateTimeBetweenDates(s.loginDate, s.logoutDate)} Minutos
            </p>
            <hr/>
          </div>
        ))
      }
    </div>
  )
};

export default LogsByUser;
