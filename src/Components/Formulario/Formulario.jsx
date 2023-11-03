import React, { useState } from 'react'
import { Card } from '../Card/Card'
import {Presentacion, styleForm, button, h3} from './Formulario.module.css'




const Formulario = () => {

  //Estados
const[date,setDate]= useState({
  Nombre : "",
  Color : ""
})
const[show, setShow] = useState(false)

const[error, setError] = useState(false)

// Validaciones
const handelSubmit= (event) => {

  event.preventDefault()

  if(date.Nombre.length>3 && isNaN(date.Nombre) && date.Color.length> 6 ){  
    setShow(true)
    setError(false)

    HTMLFormElement.reset()
  }
   else  
      setError(true)
      setShow(false)
      HTMLFormElement.reset()
    
}


//Formulario

  return (
    <div className={Presentacion}>

      <form onSubmit={handelSubmit} className={styleForm}>
        <label>Ingresa tu nombre</label>
        <input type="text" value={date.Nombre} onChange={(e)=> setDate({...date, Nombre : e.target.value.trimStart()})}/>
        

        <label>Ingresa tu color favorito</label>
        
        <input type="text" value={date.Color} onChange={(e)=> setDate({...date, Color : e.target.value.trimStart()})}/>

        <button className={button} >enviar</button>
        
        </form>
       
        {show ?
        <Card Nombre ={date.Nombre} Color={date.Color}/>
          : null
        }



        {error && <h3 className={h3}>Por favor chequea que la información sea correcta</h3>}
        
        
        </div>
  )
}

export default Formulario