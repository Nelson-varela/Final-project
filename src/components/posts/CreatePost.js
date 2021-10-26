import React, { useState, useEffect } from 'react';

import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';



export const CreatePost = ({ currentId, setCurrentId}) => {

  

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        selectedFile: '',
        tags: ''
        
    })
    
    const { message, title, selectedFile, tags } = postData;

    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

    const handleInputChange = ({target}) => {
        setPostData({
            ...postData,
            [target.name]: target.value 
        });

    }

    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
        
    }


    return (
        <div>
            <div>
                <h5>Crea un comunicado:</h5>
            </div>
             <div className="row">
                
                <form noValidate onSubmit={handleSubmit} >

                
                <label className="form-label h6">{currentId ? `Editing "${title}"` : 'Escribe un asunto'}</label>
                <input
                    name="title"
                    type="text"
                    placeholder="Asunto"
                    className="form-control mb-2"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />
                
                <label className="form-label h6">Descripción</label>
                 <textarea
                    name="message"
                    type="text-area"
                    placeholder="Describa el comunicado"
                    className="form-control  mb-2"
                    autoComplete="off"
                    value={message}
                    onChange={handleInputChange}
                ></textarea>
                
                <label className=" h6">Sube una imagen o archivo</label>
                 <div className="mb-2">
                     <FileBase type="file" multiple={false} 
                     onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                     value={selectedFile}
                     />
                     
                </div>
                    
            

                <label className="form-label h6">Etiquetas</label>
                <input
                    name="tags"
                    type="text"
                    placeholder="Etiquetas o Tags"
                    className="form-control mb-3"
                    autoComplete="off"
                    value={tags}
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
    )
}
