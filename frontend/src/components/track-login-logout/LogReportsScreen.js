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
      <h1>LogReportsScreen</h1>
      {
        sessions.map((session, idx) => (
          <div key={`session-${idx}`}>
            <p>
              <span>userId: </span>
              <span>{session.userId}</span>
            </p>
            <p>
              <span>loginDate: </span>
              <span>{session.loginDate}</span>
            </p>
            <p>
              <span>logoutDate: </span>
              <span>{session.logoutDate}</span>
            </p>
            <button onClick={() => handleClick(session.userId)}>Ver por usuario: {session.userId}</button>
            <hr/>
          </div>
        ))
      }
    </div>
  )
}
