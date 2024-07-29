import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";

//==========================================
//8. Este apartado, es muy necesario en webs donde haya muchisimas paginas dentro de ella; 
//Instalaremos en una nueva terminal, una libreria para ello: npm install react-router-dom
/*
Router:
Routes:
Route: lo usaremos para definir cada una de las rutas que vamos a tener en la web
*/
function App() {
  <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
}

export default App;
