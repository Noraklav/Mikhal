import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import logo from '../../assets/Mikhal Logo.svg'
import carrito from '../../assets/Carrito.svg'


export const Layout = () => {
  return (
    <>
      <div className='header__container'>
        <img className='logo' src={logo} alt="Mikhal" />

        <ul className="menu__container">
          <li><Link to={'/'}>Inicio</Link></li>
          <li><Link to={'/tienda'}>Tienda</Link></li>
        </ul>

        <div className="carrito__container">
          <img src={carrito} alt="" />
          <span className="contador__productos">10</span>
        </div>
      </div>

      <Outlet />
    </>
  )
}
