import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BotonSocial = ({ icono }) => {
  return (
    <>
      <div>
        <i className={icono}></i>
      </div>
    </>
  );
};

export default BotonSocial;
