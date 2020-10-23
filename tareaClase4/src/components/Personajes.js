import React, {useState, useEffect} from 'react';
import Personaje from './Personaje'

const Personajes = ({url, callbackIndex}) => {
    const [personaje, setPersonaje] = useState([]);
    const [fetching, setFetching] = useState(false)
    

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
          
            setPersonaje(data)
            setFetching(true)
          })
          
      }, [url]);




const callback2 = (props) => {



  callbackIndex(props)
}

return (
    <>
    {fetching && <Personaje {...personaje} key={personaje.id} callback2={callback2}/>}
    </>

)

}


export default Personajes;