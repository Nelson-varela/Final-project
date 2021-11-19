import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createNovelty } from '../../actions/novelties';



export const CreateNovelty = ({ currentId}) => {

    const [noveltyData, setNoveltyData] = useState({
        title: '',
        message: '',
        selectedfile: '',

    })

    const novelty = useSelector((state) => (currentId ? state.novelties.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

 

    useEffect(() => {
        if (novelty) setNoveltyData(novelty);
      }, [novelty]);

    
    const { message, title, selectedFile } = noveltyData;

    const handleInputChange = ({target}) => {
        setNoveltyData({
            ...noveltyData,
            [target.name]: target.value 
        });

    }

    const clear = () => {
        setNoveltyData({ title: '', message: '', selectedFile: '' });
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        
        
            dispatch(createNovelty({ ...noveltyData, name: user?.result?.name }));
            clear();
        
        
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
                
                <button
                    type="submit"
                    className="btn mt-3 btn-warning">
                    Enviar Novedad
                </button>
            </form>
            
        
    </div>
    )
}
