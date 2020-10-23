import React, { useState,  useEffect } from 'react';

const Potencia = ({flavors, callback, nombre}) => {
const [potencia, setPotencia] = useState([])


useEffect(() => {

    const spicy = (element) => element.flavor.name === 'spicy';
  
    const indexSpicy = flavors.findIndex(spicy)
    
    const potencia2 = flavors[indexSpicy].potency
    setPotencia(potencia2)
    
    const objeto = {
  
        name : nombre, 
        potency: potencia2
    }
  
    callback(objeto)
      
  }, []);


  



return (
<div>
   <p className="mt-2">Potencia de Spicy:</p>
   <br/>
   <p className="text-danger">{potencia}</p>

</div>

)






}

export default Potencia;