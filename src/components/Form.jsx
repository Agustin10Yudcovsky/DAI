import React, { useState } from 'react';

const Formulario = ({ onAddCita }) => {
    const [formData, setFormData] = useState({
        "mascota": '',
        "duenio": '',
        "fecha": '',
        "hora": '',
        "sintomas": ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCita(formData);
        setFormData({
            "mascota": "",
            "duenio": "",
            "fecha": "",
            "hora": "",
            "sintomas": ""
        });
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', width: '300px', margin: '0 auto', textAlign: 'left' }}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascotaName" value={formData.mascota} onChange={handleChange} placeholder="Nombre Mascota" required />

                <label>Nombre Dueño</label>
                <input type="text" name="duenio" value={formData.duenio} onChange={handleChange} placeholder="Nombre dueño de la mascota" required />

                <label>Fecha</label>
                <input type="date" name="fechaTurno" value={formData.fecha} onChange={handleChange} required />

                <label>Hora</label>
                <input type="time" name="horaTurno" value={formData.hora} onChange={handleChange} required />

                <label>Síntomas</label>
                <textarea name="sintomas" value={formData.sintomas} onChange={handleChange} placeholder="Describa los síntomas" required style={{resize:"none"}} />

                <button type="submit" style={{ backgroundColor: '#00bfff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', cursor: 'pointer', fontSize: '16px' }}>AÑADIR CITA</button>
            </form>
        </div>
    );
};

export default Formulario;