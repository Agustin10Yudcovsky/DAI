import React from 'react';
import Cita from './Citas.jsx';

function ListCitas({ listaCitas, onDelete }) {
  if (!Array.isArray(listaCitas)) {
    listaCitas = [listaCitas];
  }

  return (
    <div className="lista-citas">
      <p id='arreglo'>a</p>
      {listaCitas.map((cita, index) => (
        <Cita
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

export default ListCitas;