import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BotonSocial from "./BotonSocial";

const Registro = ({ icono }) => {
  return (
    <>
      <div className="d-flex justify-content-around flex-row bg-success-subtle rounded">
        <BotonSocial icono="fa-brands fa-facebook fa-3x" />
        <BotonSocial icono="fa-brands fa-github fa-3x" />
        <BotonSocial icono="fa-brands fa-linkedin fa-3x" />
      </div>
    </>
  );
};

export default Registro;
