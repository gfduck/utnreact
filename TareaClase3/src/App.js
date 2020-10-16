import React, { useState } from "react";
import Header from "./components/Header/Header";
import Registro from "./components/Register";
import List from "./components/List";
const App = () => {
  const [usuarioSeleccionado, setUsuario] = useState({});
  const [users, setUsers] = useState([]);
  const addUsers = (usuario) => {
    setUsers([...users, usuario]);
  };
  const initialState = {
    nombre: "",
    apellido: "",
    mail: "",
  };

  const updateUser = (usuario) => {
    console.log("usuario en App es", usuario.id)
    const result = users.map( (x) => {
      if (usuario.id === x.id) {
        
        x.nombre = usuario.nombre
        x.apellido = usuario.apellido
        x.mail = usuario.mail
      }
      return x
    } )
    setUsuario(initialState)
    setUsers(result)
  }

  const editar = (valor) => {

   setUsuario(valor)
 
  };


  const actualizar = (valor) => {

    setUsuario(valor)

  }
  const borrar = (id) => {
  const users2 = [...users]

    const removeIndex = users2.map(function(item) { return item.id; }).indexOf(id);


  users2.splice(removeIndex, 1)
    
    setUsers(users2)
    
  
  }
 
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mt-5 justify-content-center">
        <div className="col-4">
          <Registro
            addUsers={addUsers}
            usuarioSeleccionado={usuarioSeleccionado}
            actualizar={actualizar}
            updateUser={updateUser}
          />
        </div>
        <div className="col-4">
          <List usuarios={users} editar={editar} borrar={borrar}/>
        </div>
      </div>
    </div>
  );
};

export default App;
