import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './Components/NavMenu/NavMenu';
import ItemIndex from './Components/ItemIndex/ItemIndex';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Support from './Components/Support/Support';
import Nosotros from './Components/Nosotros/Nosotros';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <div className="App-header">
          <Routes>
            <Route path='/' element={<ItemIndex />}></Route>
            <Route path='/nosotros' element={<Nosotros />}></Route>
            <Route path='/soporteTecnico' element={<Support />}></Route>
            <Route path='/contacto' element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
