import React, {useState, useEffect} from 'react';
import Potencia from './Potencia'

const Personaje = ({id, name, callback2,  ...resto}) => {
 const  baseUrl = `https://pokeres.bastionbot.org/images/pokemon/`
  const urlPotency = `https://pokeapi.co/api/v2/berry/`
  const [fetching, setFetching] = useState(false)
  const [dataPotency, setDataPotency] = useState({})
  const [nombre, setNombre] = useState('')
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`${urlPotency}${id}`)
      .then((response) => response.json())
      .then((data) => {
      
        setDataPotency(data)
         
        setNombre(name)
        setFetching(true)
      })
      .catch((e) => setError(true));
 
  }, [id]);


const styleCard = {
  padding: '15px'

}

const callback = (props) => {

callback2(props)
}

return (
<div className="col-md-3 col-sm-4 mb-3 mt-3">
  {error && <p>Hay un error con la conexion a base de datos</p>}
<div className="card" style={styleCard}>
<img className="card-img-top" src={`${baseUrl}${id}.png`} alt={name} />
<div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text"></p>
   {fetching && <Potencia {...dataPotency} callback={callback} nombre={nombre}/>}
  </div> 

</div>


</div>
)

}


export default Personaje;