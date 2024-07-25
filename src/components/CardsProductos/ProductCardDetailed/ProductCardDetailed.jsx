import { useParams } from 'react-router-dom'
import productos from '../../../catalogo/productos'
import './productCardDetailed.css'
import { useEffect, useState } from 'react'

export const ProductCardDetailed = () => {

  const {id} = useParams()
  const producto = productos.find(e => e.id === parseInt(id))

  // Aca se guardan los botones almacenamiento y ram
  const [selectedOptions, setSelectedOptions] = useState({
    almacenamiento: producto.almacenamiento[0].opcion,
    ram: producto.ram[0].opcion
  });

  // Selecciona el boton de almacenamiento y ram y los modifica
  const handleClick = (option, type) => {
    setSelectedOptions(prevOptions => ({...prevOptions, [type]: option}));
  };

  // Muestra por consola el boton seleccionado
  // useEffect(() => {
  //   console.log('Opciones seleccionadas:', selectedOptions);
  // }, [selectedOptions]);

  console.log(selectedOptions);

  console.log(selectedOptions.almacenamiento);
  console.log(selectedOptions.ram);

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
            <p className="productStock">Stock: {producto.stock}</p>
            <p className="productPrice">
              <div className="actual__off">
                <p className="actual">${producto.precio_base}</p>
              </div>
            </p>

            <div className="filter__container">
              <p className='titularcito'>Almacenamiento</p>
              <div className="filters__buttons">
                {
                  producto.almacenamiento.map( (e) => <button key={e.opcion} className='button' value={e.opcion} onClick={() => handleClick(e.opcion, 'almacenamiento')}>{e.opcion}</button>)
                }
              </div>
            </div>

            <div className="filter__container">
              <p className='titularcito'>Memoria RAM</p>
              <div className="filters__buttons">
                {
                  producto.ram.map( (e) => <button key={e.opcion} className='button' value={e.opcion} onClick={() => handleClick(e.opcion, 'ram')}>{e.opcion}</button>)
                }
              </div>
            </div>
          </div>

          <div className="buttonsActionsContent">
            <div className="cartFav">
              <button className='addCart'>Añadir al carrito</button>
              <input type="number" min={1} max={producto.stock} className='addInput'/>
              <button className="addFav"><img src='../../../../public/me-gusta.png' alt="❤" /></button>
            </div>
            <button className="buyNow">Comprar Ahora</button>
          </div>

        </div>
      </div>
    </section>
  )
}
