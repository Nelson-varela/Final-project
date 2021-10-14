import React from 'react'
import { useForm } from '../../hooks/useForm';

export const CreatePost = () => {

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
                <h5>Crea un comunicado:</h5>
            </div>
             <div className="row">
                <div className="col-2">
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
                 <textarea
                    name="message"
                    type="text-area"
                    placeholder="Describa el comunicado"
                    className="form-control  mb-3"
                    autoComplete="off"
                    value={message}
                    onChange={handleInputChange}
                ></textarea>
                
                <label className="form-label h6">Sube una imagen o archivo</label>
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
                    className="btn mt-3 btn-warning">
                    Enviar comunicado
                </button>
            </form>
            </div>
        </div>
    </div>
    )
}
