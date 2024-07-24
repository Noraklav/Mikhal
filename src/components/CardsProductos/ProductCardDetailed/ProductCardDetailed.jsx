import { useParams } from 'react-router-dom'
import productos from '../../../catalogo/productos'
import './productCardDetailed.css'
import hearth from '../../../assets/ProductCardDetailed/me-gusta.png'

export const ProductCardDetailed = () => {

  const {id} = useParams()

  console.log(productos);

  const producto = productos.find(e => e.id === id)
  

  if(!producto){
    return <h2>El producto no existe, gato</h2>
  }

  return (
    <section className='productContainer'>
      <div className="productDetails">
        <img src={producto.imagen} className='productImage' alt="Imagen" />

        {/* Datos del producto */}
        <div className="productDataContent">
          <div className="infoContainer">
            <p className="productName">{producto.nombre}</p>
            <p className="productPrice">
              <div className="actual__off">
                <p className="actual">${producto.precio_base}</p>
              </div>
            </p>

            <div className="filter__container">
              <p className='titularcito'>Almacenamiento</p>
              <div className="filters__buttons">
                {
                  producto.almacenamiento.map( (e) => <button className='button'>{e.opcion}</button>)
                }
              </div>
            </div>

            <div className="filter__container">
              <p className='titularcito'>Memoria RAM</p>
              <div className="filters__buttons">
              {
                  producto.ram.map( (e) => <button className='button'>{e.opcion}</button>)
                }
              </div>
            </div>
          </div>

          <div className="buttonsActionsContent">
            <div className="cartFav">
              <button className='addCart'>Añadir al carrito</button>
              <button className="addFav"><img src={hearth} alt="" /></button>
            </div>
            <button className="buyNow">Comprar Ahora</button>
          </div>

        </div>
      </div>
    </section>
  )
}
