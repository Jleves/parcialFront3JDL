import React from 'react'
import {styleCard} from './Card.module.css'

export const Card = ({Nombre,Color}) => {
  return (
    <div className={styleCard}>
      <p>Gracias {Nombre} por participar en el formulario</p>
      <p>Guardamos en nuestra base que tu color preferido es {Color}</p>
    </div>
  )
}
