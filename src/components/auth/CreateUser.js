import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signup } from '../../actions/auth';
import Swal from 'sweetalert2';

export const CreateUser = () => {
    
    const [registerData, setRegisterData] = useState({
        name: '',
        roll: '',
        idNumber: '',
        email: '',
        password: '',
        password2: ''
    })

    const dispatch = useDispatch();

    const { 
    name,
    roll,
    idNumber,
    email,
    password,
    password2 } = registerData;

    const handleInputChange = ({ target }) => {
        setRegisterData({
            ...registerData,
            [target.name]: target.value
        });

    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( password !== password2 ) {
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
        }
        console.log('?')
        dispatch(signup( email, password, name, idNumber, roll));
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
                
                <label className="form-label h6">Nombre y Apellido</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Nombre y apellido"
                    className="form-control mb-3"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                
                <label className="form-label h6">Numero de Identificación</label>
                 <input
                    name="idNumber"
                    type="text"
                    placeholder="Numero de documento"
                    className="form-control  mb-3"
                    autoComplete="off"
                    value={idNumber}
                    onChange={handleInputChange}
                />
                <label className="form-label h6">Elija el Roll dentro de la compañía</label>
                 <select
                    name="roll"
                    placeholder="Roll usuario"
                    className="form-control  mb-3"
                    autoComplete="off"
                    value={roll}
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
                    value={email}
                    onChange={handleInputChange}
                />
                <label className="form-label h6">Asigne un Password</label>
                 <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control mb-3"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <label className="form-label h6">Confirme el password</label>
                 <input
                    name="password2"
                    type="password"
                    placeholder="confirme password"
                    className="form-control mb-3"
                    autoComplete="off"
                    value={password2}
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
