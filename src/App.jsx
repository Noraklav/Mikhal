import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from './pages/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Catalogo } from './pages/Catalogo/Catalogo';



function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path='tienda' element={<Catalogo/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App