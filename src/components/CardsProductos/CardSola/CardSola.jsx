import './CardSola.css'
import { Link } from 'react-router-dom'

export const CardSola = ({nombre, imagen, precio_base, id, alt__img}) => {

  return (
    <div className='card'>
    <Link to={`/productos/${id}`}>
      <div className="img">
        <img className='destacada' src={imagen} alt={alt__img}/>
      </div>
      <div className="texto_producto">
        <p className='titulo'>{nombre}</p>
        <span className='precio'>${precio_base}</span>
      </div>
    </Link>
    </div>
  )
}