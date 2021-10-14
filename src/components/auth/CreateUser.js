import React from 'react'
import { useForm } from '../../hooks/useForm'

export const CreateUser = () => {

    const [{ name, roll, idNumber, email, password }, handleInputChange] = useForm({
        name: '',
        roll: '',
        idNumber: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(handleSubmit)
        
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
