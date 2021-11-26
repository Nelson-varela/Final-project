import {useRef,useEffect} from 'react'

const  useTitle =({title})=>{
    //obtiene el title original
    const preTitle = useRef(document.title)

    useEffect(() =>{
        const previusTitle = preTitle.current

         if(title){
             document.title = `${title} | DroneTop`
         }
         return () => document.title = previusTitle  
    })
}

export default useTitle;