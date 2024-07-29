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
*/
function App() {
  const [username, setUsername] = useState("Alvaro F");
  return(
  <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username}/>} />
          <Route path="/menu" element={<Profile username={username} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
