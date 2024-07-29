import { useState } from "react";

export const ChangeProfile = (props) => {
    const [newUsername, setNewUsername] = useState("");
    return(
        <div>
            <input onChange={(event) => {
                setNewUsername(event.target.value);
            }}/>
            <button onClick={() => {
                    props.setNewUsername(newUsername);
                }}> 
                Change the username 
            </button>
        </div>
    );
};

//Vamos a crear un boton que, cuando lo clicemos, cambiaremos el valor de username (cambiaremos el nombre).