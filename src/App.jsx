import './App.css'
import { useState } from 'react'
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner"
import { CardProducto } from './components/CardProducto/CardProducto';

import templateImg from '../src/assets/ProductCardDetailed/test/HP-VICTUS-FB1013.jpg'
import { ProductCardDetailed } from './components/Product/ProductCardDetailed/ProductCardDetailed';

function App() {
  // const [count, setCount] = useState(0)

  // Son solo de prueba. Borrar despues
  const storage_test = ['256gb', '512gb', '1tb']
  const ram_test = ['8gb', '16gb', '32gb']

  return (
    <>
      <Header />
      <Banner textito={"MIKHAL"}/>
      {/* <CardProducto
        rutaImg={templateImg}
        altImg="Template IMG"
        descuento='10'
        precio='999.99'
        /> */}

      <ProductCardDetailed
        images={templateImg}
        name={"HP VICTUS 15-FB1013DX"}
        precioActual={"1.236.096"}
        precioTachado={"1.454.230"}
        precioOff={15}
        storage={storage_test}
        ram={ram_test}
        />
    </>

  )
}

export default App
