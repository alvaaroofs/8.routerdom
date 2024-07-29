import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
    const {username} = useContext(AppContext);

    return (
    <div> 
      PROFILE, user is: {username}
      <ChangeProfile />
    </div>
    );
  };
  /*
  Metemos los mismos imports que en el Home.js; eliminamos los props
  Quitamos la linea que esta despues de la de PROFILE, user is...
  {<ChangeProfile setUsername={props.setUsername}>}
  ya que no tenemos que hacer uso de los props


  Simplemente llamamos a la funcion <ChangeProfile />, ya que el cambio se hara dentro de la propia funcion,
  y no necesitaremos hacer nada en Profile.js
  */