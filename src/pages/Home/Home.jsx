import { Banner } from '../../components/Banner/Banner'
import productos from '../../catalogo/productos'
import { CardSola } from '../../components/CardsProductos/CardSola/CardSola';
import './Home.css'


export const Home = () => {

  const randomArr = [];
  
  const mensaje = import.meta.env.VITE_MENSAJE
  // console.log(mensaje);
  
  while (randomArr.length < 5) {
    const randomNumber = Math.floor(Math.random() * 20);
    if (!randomArr.includes(randomNumber)) {
      randomArr.push(randomNumber);
    }
  }

  const filteredProductos = productos.filter(e => randomArr.includes(e.id));

  return (
    <div>
      <Banner textito={'MIKHAL'}/>

      {/* { mensaje && <h2>{mensaje}</h2> } */}

      <div className="cards__container-home">
      {
        filteredProductos.map(e => (
          <CardSola key={e.id} {...e} />
        ))
      }
      </div>
    </div>
  )
}
