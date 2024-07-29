import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { useState } from "react";

//==========================================
/*
En este apartado 9, haremos uso del useContext; hemos sustituido la opcion de menu, por profile, y hemos creado la
carpeta components, con un js de ChangeProfile en el que dentro de el explicaremos su funcionamiento.

**El motivo por el que se produce la funcion de cambiar username que hacemos desde otros componentes, es porque ChangeProfile.js esta conectado con Profile.js (lo llamamos con <ChangeProfile /> y
este esta conectado con App.js (actual file). Para que se cumpla la funcion, simplemente en <Route path="/profile" element={<Profile username={username} />} /> vamos
a añadir a la derecha del username={username}, setUsername={setUsername}
*/
function App() {
  const [username, setUsername] = useState("Alvaro F");
  return(
  <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username}/>} />
          <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
