import './App.css'
import { useState } from 'react'
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner"
import { CardProducto } from './components/CardProducto/CardProducto';

import templateImg from '../src/assets/template_img-black.png'
import { ProductCardDetailed } from './components/Product/ProductCardDetailed/ProductCardDetailed';

function App() {
  // const [count, setCount] = useState(0)

  const arrayImages = [
    {
      original: templateImg,
      thumbnail: templateImg,
    },
    {
      original: templateImg,
      thumbnail: templateImg,
    },
    {
      original: templateImg,
      thumbnail: templateImg,
    },
    {
      original: templateImg,
      thumbnail: templateImg,
    },
    {
      original: templateImg,
      thumbnail: templateImg,
    },
  ];

  return (
    <>
      <Header />
      {/* <Banner textito={"Coder"}/> */}
      {/* <CardProducto
        rutaImg={template}
        altImg="Template IMG"
        descuento='10'
        precio='999.99'
        /> */}

      <ProductCardDetailed images={arrayImages}/>
    </>

  )
}

export default App
