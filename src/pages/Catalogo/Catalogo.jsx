import productos from  '../../catalogo/productos'
import { CardSola } from '../../components/CardsProductos/CardSola/CardSola'

export const Catalogo = () => {

  console.log(productos)

  return (
    <div>
      <h2>Tienda</h2>
      {productos.map(e => (<CardSola key={e.id} {...e}/>))}
    </div>
  )
}
