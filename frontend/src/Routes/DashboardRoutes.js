import React from 'react'
import moment from 'moment';
import 'moment/locale/es';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CreateUser } from '../components/auth/CreateUser';
import { NoveltyScreen } from '../components/novelties/NoveltyScreen';
import { PostScreen } from '../components/posts/PostScreen';
import { LogReportsScreen } from '../components/track-login-logout/LogReportsScreen';
import LogsByUser from '../components/track-login-logout/LogsByUser';

import { Navbar } from '../components/ui/Navbar';
import { useSelector } from 'react-redux';
import { AdminsRoute } from './AdminsRoute';


export const DashboradRoutes = () => {
    const Time = moment().format('LL');
    const day = moment().format('dddd');
    moment.locale('es');
    const auth = useSelector((state) => state.auth);
    console.log(auth)

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
                    <AdminsRoute exact path="/usuario/crear" component={ CreateUser } isAuthenticated={auth.logged} />
                    <Route exact path="/novedades" component={ NoveltyScreen } />
                    <AdminsRoute  exact path="/report/:userId" component={ LogsByUser} isAuthenticated={auth.logged}  />
                    <AdminsRoute  exact path="/reportelog" component={ LogReportsScreen} isAuthenticated={auth.logged}  />
                    <Redirect to="/home" />
                </Switch>
            </div>


        </>
    )
}
