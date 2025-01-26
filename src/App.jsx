import './App.css'
import Menu from './components/common/Menu'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/Inicio';

function App() {
 

  return (
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
