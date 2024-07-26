import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from './pages/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Catalogo } from './pages/Catalogo/Catalogo';
import { ProductCardDetailed } from './components/CardsProductos/ProductCardDetailed/ProductCardDetailed';
import { Error404 } from './components/Error404/Error404';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path='productos' element={<Catalogo />} />
            <Route path='productos/:id' element={<ProductCardDetailed/>} />
            <Route path='*' element={<Error404/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App