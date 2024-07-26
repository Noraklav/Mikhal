import { useState } from 'react'
import productos from  '../../catalogo/productos'
import { CardSola } from '../../components/CardsProductos/CardSola/CardSola'
import './Catalogo.css'

export const Catalogo = () => {
  // Declaracion de la variable y modificador
  const [categoriaFilter, setCategoriaFilter] = useState('');

  // Filtrado de las categorias
  const handleFilter = (categoria) => productos.filter((e) => e.categoria === categoria);

  // productosFiltrados es igual a... 
  // Si "categoriaFilter" tiene alguna coincidencia (Categoria), que se muestren solo los que coincidan
  // Sino, que muestre todos los productos
  const productosFiltrados = categoriaFilter ? handleFilter(categoriaFilter) : productos;

  return (
    <div className='catalogo__container'>
      {/* <h2 className='titulo'>Tienda (Aca va un baner)</h2> */}

      <div className="row">
        <button className='categoryButton' onClick={() => setCategoriaFilter('Gamer')}>Gamer</button>
        <button className='categoryButton' onClick={() => setCategoriaFilter('Empresarial')}>Empresarial</button>
        <button className='categoryButton' onClick={() => setCategoriaFilter('Diseño')}>Diseño</button>
        <button className='categoryButton' onClick={() => setCategoriaFilter('Hogar')}>Hogar</button>
        <button className='categoryButton' onClick={() => setCategoriaFilter('')}>Borrar Filtros</button>
      </div>

      <div className="cards__container">
        {productosFiltrados.map((producto) => (
          <CardSola key={producto.id} {...producto} />
        ))}
      </div>
    </div>
  );
}
