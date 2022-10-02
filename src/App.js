import fotoPortal from './imagenes/fotoPortal.gif';
import './App.css';
import IngresoCoordenadas from './componentes/IngresoCoordenadas';
import EgresoCoordenadas from './componentes/EgresoCoordenadas';
import { useState } from 'react';
import Boton from './componentes/Boton';


function App () {

  const [inputX, setInputX]= useState(0);
  const [inputY, setInputY]= useState(64);
  const [inputZ, setInputZ]= useState(0);

  const [outputX, setOutputX]= useState(0);
  const [outputY, setOutputY]= useState(64);
  const [outputZ, setOutputZ]= useState(0);

  const [esOverworld, setEsOverworld ]= useState(true);



  return (
    <div className="App">
      <div className='titulo-contenedor'>
      <img
        className='fotoPortal'
        src={fotoPortal}
        alt='Foto de portal'
      />
      <h1 className='titulo'>Portal coords calculator</h1>
      </div>

      <Boton
    esOverworld={true}
    manejarClic={e=> 
      {setEsOverworld(e.target.esOverworld=!esOverworld)
        setInputX(Math.round(outputX))
        setOutputX(inputX)
        setInputZ(Math.round(outputZ))
        setOutputZ(inputZ)
      }
    }
    contenido={` ${esOverworld ? 'Overworld to Nether' : 'Nether to Overworld' }`}
    />
    
     <div className='contenedorIngresoCoordenadas'>
        
      
      <IngresoCoordenadas
        eje='X'
        valor= {inputX}
        handleInputChange= {e=> {
          setInputX(e.target.value)
          setOutputX(esOverworld ? e.target.value/8 : e.target.value*8)
        }
        }
     />
      <IngresoCoordenadas
        eje='Y'
        valor= {inputY}
        handleInputChange= {e=> {
          setInputY(e.target.value)
          setOutputY(e.target.value)}
        }
     />
      <IngresoCoordenadas
        eje='Z'
        valor= {inputZ}
        handleInputChange= {e=> {
          setInputZ(e.target.value)
          setOutputZ(esOverworld ?  e.target.value/8 : e.target.value*8)}
        }
     />
     </div>

     <div className='contenedorEgresoCoordenadas'>
     <EgresoCoordenadas
        eje='X'
        valor={Math.round(outputX)}
     />
     <EgresoCoordenadas
        eje='Y'
        valor={Math.round(outputY)}
     />
     <EgresoCoordenadas
        eje='Z'
        valor={Math.round(outputZ)}
     />
     </div>

  
    </div>
  )
}

export default App
