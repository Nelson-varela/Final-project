import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signin } from '../../actions/auth';


const initialState = { email: '', password: '' };

export const LoginScreen = () => {

    const [loginData, setLoginData] = useState({initialState})
    const dispatch = useDispatch();
    const history = useHistory();


    const handleInputChange = ({ target }) => {
        setLoginData({
            ...loginData,
            [target.name]: target.value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const lastPath= localStorage.getItem('lastPath') || '/';
        
        dispatch(signin(loginData));

        history.replace(lastPath)
        
    }

    return (
        <div className="bg-light">
            
            <div className="row g-0">
            <div className="col-lg-7 d-none d-lg-block">
                <img src={'https://raw.githubusercontent.com/Bragovar/Loguin/main/img-1.jpg'} alt="" />

            </div>
            
            <div className="col-lg-5 bg-dark d-flex flex-column align-items-end min-vh-100">
                <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100">
                    <img  src={'https://raw.githubusercontent.com/Bragovar/Loguin/main/img-1.jpg'} 
                    alt=""  
                    style={{maxWidth: "150px"}}
                    className="img-fluid" />
                
                <div className="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                <h1 className="font-weight-bold mb-4 text-warning">TrackMe: Descubre lo nuevo</h1>
                <form  onSubmit={handleSubmit}
                    className="mb-5">
                    <div className="mb-4">
                      <label  className="form-label font-weight-bold text-warning" >Email</label>
                      <input 
                      className="form-control bg-dark-x border-0" 
                      name="email"
                      type="email"
                      placeholder="Escriba su password"
                      autoComplete="off"
                      onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label  className="form-label font-weight-bold text-warning">Contraseña</label>
                      <input 
                      className="form-control bg-dark-x border-0 mb-2" 
                      name="password"
                      type="password"
                      placeholder="Escriba su password"
                      autoComplete="off"
                      onChange={handleInputChange}
                      
                      />
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-warning w-100"
                    >Iniciar sesión
                    </button>
                  </form>

                
                </div>
                <div className="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
                    <p className="d-inline-block mb-0 text-warning">¿Todavia no tienes una cuenta?</p> <p className="text-light font-weight-bold ">Acercate a tu supervisor</p>
                </div>
            </div>
        </div>
        
            {/* <form onSubmit={handleSubmit}>
            <label > Email</label>
            <input 
                   name="email"
                   type="text"
                   placeholder="Escriba su email"
                   className="form-control mb-2"
                   autoComplete="off"
                   value={email}
                   onChange={handleInputChange}
            
            />
             

            <label >Password</label>
             <input 
                     name="password"
                     type="password"
                     placeholder="Escriba su password"
                     className="form-control mb-2"
                     autoComplete="off"
                     value={password}
                     onChange={handleInputChange}
             />

             <button 
             type="submit"
             className="btn btn-primary">
                 enviar
             </button>

             </form> */}


        </div>
        </div>

        
        

    )
}

