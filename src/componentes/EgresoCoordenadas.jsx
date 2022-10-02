import React from 'react';
import '../EgresoCoordenadas.css'

 function EgresoCoordenadas({eje, valor}){
  return(
      <label className='eje'>
        {eje}
      <input className='EgresoCoordenadas'  value={valor} readOnly></input>
      </label>
    );
}

export default EgresoCoordenadas;