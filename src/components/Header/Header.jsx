import React from 'react'
import './Header.css'
import logo from '../../assets/Header/Mikhal Logo.svg'
import carrito from '../../assets/Header/Carrito.svg'

export const Header = () => {
  return (
    <div className='header__container'>
      
      <img className='logo' src={logo} alt="Mikhal" />

      <ul className="menu__container">
        <a href="#inicio" className="item">Inicio</a>
        <a href="#tienda" className="item">Tienda</a>
        <a href="#categorias" className="item">Categorias</a>
        <a href="#contacto" className="item">Contacto</a>
      </ul>

      <div className="carrito__container">
        <img src={carrito} alt="" />
        <span className="contador__productos">10</span>
      </div>
    </div>
  )
}
