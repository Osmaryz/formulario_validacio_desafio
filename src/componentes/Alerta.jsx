import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const Alerta = ({ mensaje, mensaje_exitoso }) => {
  return (
    <>
      {!mensaje_exitoso && mensaje && (
        <div className="alert alert-danger" role="alert">
          {mensaje}
        </div>
      )}
      {mensaje_exitoso && (
        <div className="alert alert-success" role="alert">
          {mensaje_exitoso}
        </div>
      )}
    </>
  );
};

export default Alerta;
