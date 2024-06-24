import React from 'react';
import Citas from './Citas.jsx';

function List_citas1({ listaCitas, onDelete }) {
  if (!Array.isArray(listaCitas)) {
    listaCitas = [listaCitas];
  }

  return (
    <div className="lista-citas">
      <p id='arreglo'>a</p>
      {listaCitas.map((cita, index) => (
        <Citas
          key={index}
          mascota={cita.nombreMascota}
          dueno={cita.nombreDueno}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.aclaracion}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default List_citas1;