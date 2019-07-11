import {useState,useEffect} from 'react';
const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me';

 const useGetDara = () =>{
    /*
     Se va a encargar de manejar el estado.
     Desestructuramos useState en mydata, setData;

     mydata = mi informacion los valores que yo quiero recibir.
     setData = la funcion que se encargar de acutulizar el estado.
    */
     const [mydata, setData] = useState([]);


     /*
      Use efect

      La funcion que nos va a traer o tiene la capacidad de manejar
      efectos secundarios: Manipular algun efecto del DOM, ir ha hacer una peticeon
      a un API y traer la informacion."Practicamente se encarga del ciclo de vida."

      Dentro de useEfect vamos a construir este flesh, el llamado a la API.

      El useEfect tiene la capacida de escuhcar estados.

      Y vamos a exponerla con un return.

      */
     useEffect(()=>{
         fetch(api)
             .then(response => response.json())
             .then(data => setData(data))
     }, []);


     return mydata;
 }

 export default useGetDara;
