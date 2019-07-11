import React, { useState } from 'react';

const HelloWord = () =>{

    const [activate, setActivate] = useState(true);

    const handleclik = () => {
        setActivate(!activate);
    }

    console.log("Perro");

    return(
        <div>
            <button onClick={handleclik}> OCULTAR </button>
            {activate &&
                <h1> Hola al mundo de los Hooks!</h1>
            }

        </div>
    );



}







export  default  HelloWord;