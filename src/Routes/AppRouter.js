import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { DashboradRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  
   
   const auth = useSelector((state) => state.auth);
   console.log(auth)
   

    return (
        
        <Router>
        <div>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
              <PublicRoute 
              exact path="/login" 
              component ={ LoginScreen }
              isAuthenticated={auth.logged}
              />
               
              <PrivateRoute
              path="/" 
              component ={ DashboradRoutes } 
              isAuthenticated={auth.logged}
              
              />
          </Switch>
        </div>
      </Router>
    )
}
