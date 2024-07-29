import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
    const { setUsername } = useContext(AppContext);

    const [newUsername, setNewUsername] = useState("");
    return(
        <div>
            <input onChange={(event) => {
                setNewUsername(event.target.value);
            }}/>
            <button onClick={() => {
                    setUsername(newUsername);
                }}> 
                Change the username 
            </button>
        </div>
    );
};

//Lo mismo, le pasamos los imports de useContext y appContext
//Le pasamos la constante de username como en los otros componentes. Procedemos a quitar los props
//No quiere decir que los props sean malos, si no que solo hay que usarlos cuando sean necesarios.