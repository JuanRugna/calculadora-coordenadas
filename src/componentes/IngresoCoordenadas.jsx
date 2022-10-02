import React from 'react';
import '../IngresoCoordenadas.css'

 function IngresoCoordenadas({eje, valor, handleInputChange}){
    

  return(
   
      <label className='eje'>
        
        {eje}
        
      <input className='ingresoCoordenadas' type='number' value={valor} onChange={handleInputChange}></input>
      </label>
    
    );
}

export default IngresoCoordenadas;