import React from 'react'
import { useForm } from '../../hooks/useForm';

export const NoveltyScreen = () => {

    const [{ title, message, file }, handleInputChange] = useForm({
        title: '',
        message: '',
        file: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(handleSubmit)
        
    }
    return (
        <div>
            <div>
                <h2>Notifica una Novedad</h2>
                <hr />
            </div>
             <div className="row">
                <div className="col-5">
            <form onSubmit={handleSubmit} >
                
                <label className="form-label h6">Asunto</label>
                <input
                    name="title"
                    type="text"
                    placeholder="Asunto"
                    className="form-control mb-3"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />
                
                <label className="form-label h6">Descripción</label>
                 <input
                    name="message"
                    type="text-area"
                    placeholder="Describa la novedad brevemente"
                    className="form-control  mb-3"
                    autoComplete="off"
                    value={message}
                    onChange={handleInputChange}
                />
                
                <label className="form-label h6">Adjunta un documento soporte si aplica</label>
                 <input
                    name="email"
                    type="email"
                    placeholder="Sube un archivo"
                    className="form-control  mb-3"
                    autoComplete="off"
                    value={file}
                    onChange={handleInputChange}
                />
                
                <button
                    type="submit"
                    className="btn mt-3 btn-outline-warning">
                    Enviar Novedad
                </button>
            </form>
            </div>
        </div>
    </div>
    )
}
