import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', roll: '', password: '', confirmPassword: '' };

export const CreateUser = () => {
    
    const [registerData, setRegisterData] = useState({initialState})
    
    const dispatch = useDispatch();
    const history = useHistory();

    
    const handleInputChange = ({ target }) => {
        setRegisterData({
            ...registerData,
            [target.name]: target.value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

            dispatch(signup(registerData, history));
          
        
    }
        
    

    return (
        
        <div>
            
            <div>
                <h2>Registra un nuevo usuario</h2>
                <hr />
            </div>
             <div className="row">
                <div className="col-5">
            <form onSubmit={handleSubmit} >
                
                <label className="form-label h6">Nombre</label>
                <input
                    name="firstName"
                    type="text"
                    placeholder="Nombre"
                    className="form-control mb-3"
                    autoComplete="off"
                    onChange={handleInputChange}
                />

                <label className="form-label h6">Apellido</label>
                <input
                    name="lastName"
                    type="text"
                    placeholder="Apellido"
                    className="form-control mb-3"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                
                
                 <label className="form-label h6">Elija el Roll dentro de la compañía</label>
                 <select
                    name="roll"
                    className="form-control  mb-3"
                    autoComplete="off"
                    onChange={handleInputChange}
                >
                    <option defaultValue>Seleccione un roll</option>
                    <option>Administrador</option>
                    <option>Operaciones</option>
                </select> 

                <label className="form-label h6">Email</label>
                 <input
                    name="email"
                    type="email"
                    placeholder="Email Usuario"
                    className="form-control  mb-3"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <label className="form-label h6">Asigne un Password</label>
                 <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control mb-3"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <label className="form-label h6">Confirme el password</label>
                 <input
                    name="confirmPassword"
                    type="password"
                    placeholder="confirme password"
                    className="form-control mb-3"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn mt-3 btn-outline-warning">
                    Registrar
                </button>
            </form>
            </div>
        
        </div>

    </div>

        

    )
}
