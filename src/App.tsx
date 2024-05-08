import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import Exchange from "./pages/exchange";
import Swap from "./pages/swap";

function App() {

  return (
    <Routes>
      <Route   path='/home'  element={<Home/>} />
      {/* <Route   path='/exchange'  element={<Exchange/>} />
      <Route   path='/swap'  element={<Swap/>} /> */}
     
    </Routes>
  )
}

export default App
