import './App.css'
import { useState } from 'react'
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner textito={"Coder"}/>
    </>
  )
}

export default App
