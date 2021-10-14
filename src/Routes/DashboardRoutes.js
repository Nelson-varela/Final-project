import React from 'react'
import moment from 'moment';
import 'moment/locale/es';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CreateUser } from '../components/auth/CreateUser';
import { NoveltyScreen } from '../components/novelties/NoveltyScreen';
import { PostScreen } from '../components/posts/PostScreen';
import { LogReportsScreen } from '../components/track-login-logout/LogReportsScreen';

import { Navbar } from '../components/ui/Navbar';


export const DashboradRoutes = () => {
    const Time = moment().format('LL');
    const day = moment().format('dddd');
    moment.locale('es');


    return (
        <>
            <Navbar/>

            <div className="container text-secondary">
                <hr/>
                <p>Bienvenidos, {day} {Time}</p>
                
            </div>


            <div className="container-sm mt-2">
                <Switch>
                    <Route exact path="/home" component={ PostScreen } />
                    <Route exact path="/usuario/crear" component={ CreateUser } />
                    <Route exact path="/novedades" component={ NoveltyScreen } />
                    <Route exact path="/reportelog" component={ LogReportsScreen}  />
                    <Redirect to="/home" />
                </Switch>
            </div>


        </>
    )
}
