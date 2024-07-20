import React from 'react'
import './productCardDetailed.css'
import hearth from '../../../assets/ProductCardDetailed/me-gusta.png'

export const ProductCardDetailed = ({images, name, precioActual, precioTachado, precioOff, storage, ram}) => {

  return (
    <section className='productContainer'>
      <div className="productDetails">
        <img src={images} className='productImage' alt="" />

        {/* Datos del producto */}
        <div className="productDataContent">
          <span className='recienLlegado'>Recién llegado!</span>
          <div className="infoContainer">
            <p className="productName">{name}</p>
            <p className="productPrice">
              <span className="tachado">${precioTachado}</span>
              <div className="actual__off">
                <p className="actual">${precioActual}</p>
                <span className='off'>{precioOff}% OFF</span>
              </div>
            </p>

            <div className="filter__container">
              <p className='titularcito'>Almacenamiento</p>
              <div className="filters__buttons">
                {
                  storage.map( (e) => <button className='button'>{e}</button>)
                }
              </div>
            </div>

            <div className="filter__container">
              <p className='titularcito'>Memoria RAM</p>
              <div className="filters__buttons">
              {
                  ram.map( (e) => <button className='button'>{e}</button>)
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
