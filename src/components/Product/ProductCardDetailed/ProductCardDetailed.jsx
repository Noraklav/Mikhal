import React from 'react'
import './productCardDetailed.css'
import hearth from '../../../assets/ProductCardDetailed/me-gusta.png'
import { CarruselImagenes } from './CarruselImagenes/CarruselImagenes';

export const ProductCardDetailed = ({images}) => {

  return (
    <section className='productContainer'>
      <div className="productDetails">
        <CarruselImagenes images={images}/>

        {/* Datos del producto */}
        <div className="productDataContent">
          <span className='recienLlegado'>Recién llegado!</span>
          <div className="infoContainer">
            <p className="productName">NOMBRE DEL PRODUCTO SUPER EPICARDO</p>
            <p className="productPrice">
              <span className="tachado">$999.99</span>
              <div className="actual__off">
                <p className="actual">$799.99</p>
                <span className='off'>25% OFF</span>
              </div>
            </p>

            <div className="filter__container">
              <p className='titularcito'>Almacenamiento</p>
              <div className="filters__buttons">
                <button className='button' onClick={() =>{}}>256gb</button>
                <button className='button active' onClick={() =>{}}>512gb</button>
                <button className='button' onClick={() =>{}}>1tb</button>
                <button className='button' onClick={() =>{}}>1tb</button>
              </div>
            </div>

            <div className="filter__container">
              <p className='titularcito'>Memoria RAM</p>
              <div className="filters__buttons">
                <button className='button' onClick={() =>{}}>8gb</button>
                <button className='button' onClick={() =>{}}>16gb</button>
                <button className='button active' onClick={() =>{}}>32gb</button>
                <button className='button' onClick={() =>{}}>64gb</button>
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
