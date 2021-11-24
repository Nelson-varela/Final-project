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
      <h1>Logs</h1>
      {
        sessions.map((s, idx) => (
          <div key={`session-${idx}-by-${userId}`}>
            <p>
              loginDate: {s.loginDate}
            </p>
            <p>
              logoutDate: {s.logoutDate}
            </p>
            <p>
              time worked: {calculateTimeBetweenDates(s.loginDate, s.logoutDate)} seconds
            </p>
            <hr/>
          </div>
        ))
      }
    </div>
  )
};

export default LogsByUser;
