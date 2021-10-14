import React from 'react'
import { Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
            <nav className="navbar navbar-expand navbar-light bg-white">
            
            <Link 
                className="mx-3 navbar-brand" 
                to="/"
            >
                DroneTop
            </Link>
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
                   {/*  {
                    user.roll === 'Admin' &&
                     (
                        <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search Hero
                    </NavLink>
                    )
                    } */}
                    
                </div>
            </div>

            <div className="order-3 pr-3 ">
                <ul className="navbar-nav ml-auto">
                    
                    <span className="nav-item nav-link text-warning">Nelson Varela</span>
                    <span className="nav-item nav-link text-info">Admin</span>

                    <button
                        className="mx-3 btn btn-warning btn-sm" 
                        
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
        
    )
}
