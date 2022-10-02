import React from 'react';
import '../Boton.css'

 function Boton({manejarClic ,esOverworld, contenido}){
  

  return(
   
     <button className='boton' onClick={manejarClic} value={esOverworld} >{contenido}</button>
    
    );
}

export default Boton;