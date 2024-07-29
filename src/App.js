import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();
//==========================================
/*
--->Para el useContext, primero declararemos el createContext

En este apartado 9, haremos uso del useContext; hemos sustituido la opcion de menu, por profile, y hemos creado la
carpeta components, con un js de ChangeProfile en el que dentro de el explicaremos su funcionamiento.

**El motivo por el que se produce la funcion de cambiar username que hacemos desde otros componentes, es porque ChangeProfile.js esta conectado con Profile.js (lo llamamos con <ChangeProfile /> y
este esta conectado con App.js (actual file). Para que se cumpla la funcion, simplemente en <Route path="/profile" element={<Profile username={username} />} /> vamos
a añadir a la derecha del username={username}, setUsername={setUsername}

AppContext: va a tener toda la informacion que le pasemos; le metemos el .Provider porque le vamos a estar pasando informacion a los componentes que se encuentran dentro de las etiquetas
<AppContext> </AppContext>

En AppContext.Provider, le pasaremos en lo del value{} las variables o funciones que queremos pasar; haciendo esto podemos simplificar las siguientes lineas de codigo:
          <Route path="/" element={<Home username={username}/>} />
          <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />

Y las podemos dejar asi:
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />

**Luego tenemos que ir al componente para modificar mas cosas (explicado en comentarios dentro de cada componente); Home.js, Profile.js, ChangeProfile.js
*/
function App() {
  const [username, setUsername] = useState("Alvaro F");
  return(
  <div className="App">
    <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username}/>} />
          <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
    </div>
  );
}

export default App;
