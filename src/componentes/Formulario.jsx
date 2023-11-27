import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Formulario = ({ enviar, detector_cambio_input }) => {
  return (
    <>
      <form className="formulario rounded bg-success-subtle" onSubmit={enviar}>
        <div className="form-group  p-2">
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={detector_cambio_input}
          />
        </div>
        <div className="form-group m-2 p-1">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={detector_cambio_input}
          />
        </div>
        <div className="form-group m-2 p-1">
          <input
            type="password"
            placeholder="Contraseña"
            name="clave_1"
            onChange={detector_cambio_input}
          />
        </div>
        <div className="form-group m-2 p-1">
          <input
            type="password"
            placeholder="Confirma tú contraseña"
            name="clave_2"
            onChange={detector_cambio_input}
          />
        </div>
        <button type="submit" value="Enviar" className="btn-primary p-1 m-2">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Formulario;
