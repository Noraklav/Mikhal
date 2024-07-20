import React from 'react'
import './cardProducto.css'
import { Off } from './Off/Off'

export const CardProducto = ({rutaImg, altImg, descuento, precio}) => {
  return (
    <div className='card'>
      <div className="img">
        <img className='destacada' src={rutaImg} alt={altImg} />
        {descuento!=''? <Off num={descuento}/> : ""}
      </div>
      <div className="texto_producto">
        <p className='titulo'>Lorem ipsum dolor sit amet consectetur</p>
        <span className='precio'>${precio}</span>
      </div>
    </div>
  )
}