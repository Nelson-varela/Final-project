import React, { useRef, useState } from 'react'
import { commentPost } from '../../actions/posts'
import { useDispatch } from 'react-redux';



export const Comments = ({post}) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const [comment, setComment] = useState("")
    const dispatch = useDispatch();
    const commentsRef = useRef();

    const [comments, setComments] = useState(post?.comments);

    const clear = () => {
      setComment("");
    };


    const handleComment = async (e) => {

        e.preventDefault(); 
        const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));
    
        setComment('');
        setComments(newComments);

        if(comment === ""){
          setComment(null)
        }
       
    
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });

        
      };

      






    return (
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Comentarios</h3>
            <hr />


            {comments?.map((c, i) => (
            <h5 key={i} >
              <strong className="text-primary">{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
            </h5>
             ))}
           <div ref={commentsRef} />



            <form  >
            
            <input 
            name="comment"
            type="text"
            className="form-control mb-2"
            placeholder="Escribe tu comentario"
            onChange={(e) => setComment(e.target.value)}
             />
             <button 
             className="btn btn-primary"
             onClick={handleComment}
             >
              Comentar 
             </button>
             </form>
             </div>
        </div>
    )
}