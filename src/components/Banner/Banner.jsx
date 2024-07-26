import React from 'react'
import './banner.css'

export const Banner = ({textito}) => {
  return (
    <div className='banner__container'>
      <p className="titular">Los mejores precios en <span className="prop__text">{textito}!</span></p>

      <div className="banner">
        {/* Aca va ir un banner */}
      </div>
    </div>
  )
}
