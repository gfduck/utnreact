import React, {useState, useEffect} from 'react';
import Personajes from './components/Personajes'
import Grafico from './components/Chart'


const  App = ()  => {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=30`;
  const [personajes, setPersonajes] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [potencias, setPotencias] = useState([])
  const [error, setError] = useState(false);

  const callbackIndex = (objeto) => {

    
    
    
     
     
     setPotencias([...potencias, objeto])
  }


  useEffect(() => {
    
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
     
     
      setPersonajes(data.results)
      setFetching(true)
     
      })
      .catch((e) => setError(true));
  }, []);



  

  return (
    <div className="App">
      <div className="container-fluid">

      <h1 className="text-center">Potencias de Spicy</h1>
     <Grafico potencias={potencias}/>

     {error && <p>Hay un error con la conexion a la base de datos</p>}
        <div className="row">


           {fetching && personajes.map((personaje, index) => (
            <Personajes {...personaje} key={index} callbackIndex={callbackIndex}/>
          ))}
          </div>
      </div>
    </div>
  )
}

export default App;
