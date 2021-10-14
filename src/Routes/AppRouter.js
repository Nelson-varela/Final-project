import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { DashboradRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        
        <Router>
        <div>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
              <Route 
              exact path="/login" 
              component ={ LoginScreen }
              />
               
              <Route 
              path="/" 
              component ={ DashboradRoutes } 
              />
          </Switch>
        </div>
      </Router>
    )
}
