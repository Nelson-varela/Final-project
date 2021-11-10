import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionType from '../../types/types';
import decode from 'jwt-decode';

export const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {

        dispatch({ type: actionType.LOGOUT
           
         });
    
        history.replace('/login') 
        setUser(null);
    
        
      };


      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
         

      
      

    return (
            <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
            
            <NavLink
                className="mx-3 navbar-brand" 
                to="/"
            >
                DroneTop
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                  
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/novedades"
                    >
                        <button
                          type="submit"
                          className="btn btn-outline-warning btn-sm">
                              Novedades
                       </button>
                    </NavLink>
                    {
                (user?.result.roll === 'Administrador') 
                && (
                    <li className="nav-item dropdown">
                    <NavLink 
                    
                        activeClassName="active"
                        className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                        exact
                        to="/dc"
                    >
                        Manejo de Usuarios
                    
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><Link to="/reportelog" className="dropdown-item" >Reporte de Logueo</Link></li>
                      <li><Link to="/usuario/crear" className="dropdown-item" >Crear un Usuario</Link></li>
                    </ul>
                    </li>
                )
               }
                    
                </div>
            </div>

            <div className="order-3 pr-3 ">
                <ul className="navbar-nav ml-auto">
                    
                    <h6 className="nav-item nav-link text-white">Hola, {user?.result.name}</h6>
                    <h6 className="nav-item nav-link text-info"><strong className="h6">{user?.result.roll}</strong></h6>

                    <button
                        className="mx-3 btn btn-warning btn-sm" 
                        onClick={logout}
                        
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
        
    )
}
