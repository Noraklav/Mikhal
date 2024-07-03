import React from 'react'
import './Header.css'
import logo from '../../assets/Header/Mikhal Logo.svg'
import carrito from '../../assets/Header/Carrito.svg'

export const Header = () => {
  return (
    <div className='header__container'>
      
      <img className='logo' src={logo} alt="Mikhal" />

      <ul className="menu__container">
        <li className="item">Celulares</li>
        <li className="item">Notebooks</li>
        <li className="item">Televisores</li>
        <li className="item">Accesorios</li>
      </ul>

      <div className="carrito__container">
        <img src={carrito} alt="" />
        <span className="contador__productos">10</span>
      </div>
    </div>
  )
}
