import React from "react";
import "../App.css";

const List = ({ usuarios, editar, limpiar, borrar }) => {
  const handleEdit = (id_usuario) => {
    const valor = usuarios.find((x) => x.id === id_usuario);

    editar(valor);

  };
  const handleBorrar = (id) => {
    borrar(id);
  };

  return (
    <>
      {!usuarios.length ? "No hay usuarios cargados" : null}
      {usuarios.map(
        ({ nombre, apellido, mail, id, test = "undefined definido :D" }) => (
          <div className="card mb-5" key={id}>
            <div className="text-right mb-5">
              <button
                onClick={() => handleEdit(id)}
                className="btn btn-warning float-right"
              >
                Editar
              </button>
              <button
                onClick={() => handleBorrar(id)}
                className="btn btn-danger float-left"
              >
                Borrar
              </button>
            </div>
            {test}
            <div className="card-body">
              <h4 className="card-title">
                {id}. {nombre} {apellido}
              </h4>
              <p>{mail}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default List;
