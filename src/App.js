import './App.css';
import { AddNotifContextProvider } from './Context/NotifContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './Components/NavMenu/NavMenu';
import ItemIndex from './Components/ItemIndex/ItemIndex';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Support from './Components/Support/Support';
import Nosotros from './Components/Nosotros/Nosotros';
import Tienda from './Components/Tienda/Tienda'
import Ofertas from './Components/Ofertas/Ofertas';
import Desarrollo from './Components/DesarrolloWeb/Desarrollo';
import Cursos from './Components/Cursos/Cursos';
import ArmaTuPC from './Components/ArmaPC/ArmaTuPC';

function App() {
  return (
    <div className="App">
      <AddNotifContextProvider>
        <BrowserRouter>
          <NavMenu />
          <div className="App-header">
            <Routes>
              <Route path='/' element={<ItemIndex />}></Route>
              <Route path='/nosotros' element={<Nosotros />}></Route>
              <Route path='/tienda' element={<Tienda />}></Route>
              <Route path='/armaTuPC' element={<ArmaTuPC />}></Route>
              <Route path='/ofertas' element={<Ofertas />}></Route>
              <Route path='/soporteTecnico' element={<Support />}></Route>
              <Route path='/desarrolloWeb' element={<Desarrollo />}></Route>
              <Route path='/cursosPresenciales' element={<Cursos />}></Route>
              <Route path='/contacto' element={<Contact />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AddNotifContextProvider>
    </div>
  );
}

export default App;
