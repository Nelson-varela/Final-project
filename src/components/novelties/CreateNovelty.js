import React, { useState } from 'react';
import FileBase from 'react-file-base64';


export const CreateNovelty = () => {


    const [noveltyData, setNoveltyData] = useState({
        title: '',
        message: '',
        slectedfile: '',
        creator: ''
    })
    
    const { message, title, selectedFile, creator } = noveltyData;

    const handleInputChange = ({target}) => {
        setNoveltyData({
            ...noveltyData,
            [target.name]: target.value 
        });

    }
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
                <div className="mb-2">
                     <FileBase type="file" multiple={true} 
                     value={selectedFile}
                     onChange={handleInputChange}/>
                     
                </div>
                 <label className="form-label h6">Creador</label>
                 <input
                    name="creator"
                    type="text"
                    placeholder="Tu nombre"
                    className="form-control  mb-3"
                    autoComplete="off"
                    value={creator}
                    onChange={handleInputChange}
                /> 
                
                <button
                    type="submit"
                    className="btn mt-3 btn-warning">
                    Enviar Novedad
                </button>
            </form>
            
        
    </div>
    )
}
