import React from 'react';

function Citas({ duenio, mascota, fecha, hora, sintomas, onDelete}) {
  
  return (
    <div className="cita-card">
  <div className="cita">
    <p><strong>Dueño:</strong> <span>{duenio}</span></p>
    <p><strong>Mascota:</strong> <span>{mascota}</span></p>
    <p><strong>Fecha:</strong> <span>{fecha}</span></p>
    <p><strong>Hora:</strong> <span>{hora}</span></p>
    <p><strong>Síntomas:</strong> <span>{sintomas}</span></p>
    <button className="boton-borrar" onClick={onDelete}>Borrar</button>
  </div>
</div>

  );
} 

export default Citas;