import logo from '../../assets/Mikhal Logo.svg'
import './Footer.css'

export const Footer = () => {

  return (
    <div className="main__footer">
    <footer className='footer'>
        <div className="left">
          <span className='span'>Hecha por</span>
          <p className='yo'>Agustin Di Vincenzo</p>
          <a className='link' href='https://linktr.ee/agustindvz' target='_blank'>Enlaces</a>
        </div>
        <div className="logo">
          <img src={logo} alt="Mikhal" />
        </div>
    </footer>
    <span className="copy">©Mikhal 2024 - Agustin Di Vincenzo - Todos los derechos reservados</span>
    </div>
  )
}
