// import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto =(props)=>{
  
    const placeholderModificado = `${props.placeholder}...`
    console.log("Datos", props)
    const manejarValor=(e)=>{
        props.actualizarValor(e.target.value)
    }
    
    return <div className='campo-texto'>
            <label>{props.titulo}</label>
            <input
                placeholder={placeholderModificado}
                required={props.required}
                value={props.valor}
                onChange={manejarValor} 
            />
    </div>
}

export default CampoTexto