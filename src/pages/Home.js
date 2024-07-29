import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
    const {username} = useContext(AppContext);
    return <h1> This is the home page and user is: {username}</h1>;
  };

  /*
  Hemos importado el useContext de react y el AppContext que hemos creado en el App.js; declaramos la constante username, pasandole el valor del AppContext con useContext
  */