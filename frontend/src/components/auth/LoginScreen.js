import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signin } from '../../actions/auth';
import useTitle from '../../hooks/useTitle';

import './loginScreen.css'

const initialState = { email: '', password: '' };

export const LoginScreen = () => {
    const [loginData, setLoginData] = useState({ ...initialState })
    const dispatch = useDispatch();
    const router = useHistory();
    useTitle({title: 'Log-In'})
    

    const handleInputChange = ({ target }) => {
        setLoginData(prev => ({
            ...prev, [target.name]: target.value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signin(loginData, router));
    }

    return (
        <div className="bg-light">

            <div className="row g-0">
                <div className="col-lg-7 d-none d-lg-block img-drone">


                </div>

                <div className="col-lg-5 bg-dark d-flex flex-column align-items-end min-vh-100">
                    <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100">
                        <div className="mb-3 position-relative">
                            <img src={'https://raw.githubusercontent.com/Bragovar/Loguin/main/img-1.jpg'}
                                alt=""
                                style={{ maxWidth: "150px" }}
                                className="img-fluid" />
                        </div>

                        <div className="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                            <h1 className="font-weight-bold mb-4 text-warning">TrackMe: Descubre lo nuevo</h1>
                            <form onSubmit={handleSubmit}
                                className="mb-5">
                                <div className="mb-4">
                                    <label className="form-label font-weight-bold text-warning" >Email</label>
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
                                    <label className="form-label font-weight-bold text-warning">Contraseña</label>
                                    <input
                                        className="form-control bg-dark-x border-0 mb-2"
                                        name="password"
                                        type="password"
                                        placeholder="Escriba su password"
                                        autoComplete="off"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/*  <div className="mb-4">
                                    <label className="form-label font-weight-bold text-warning">Loggs</label>
                                    <input
                                        className="form-control bg-dark-x border-0 mb-2"
                                        name="loggs"
                                        type="text"
                                        placeholder="Escriba si"
                                        autoComplete="off"
                                        onChange={handlelogin}

                                    />
                                </div> */}


                                <button
                                    type="submit"
                                    className="btn btn-warning w-100"
                                >Iniciar sesión
                                </button>
                            </form>


                        </div>
                        <div className="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
                            <p className="d-inline-block mb-0 text-warning">¿Todavia no tienes una cuenta?</p> 
                            <p className="text-light font-weight-bold ">Acercate a tu supervisor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
