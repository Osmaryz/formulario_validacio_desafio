import "./App.css";
import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Alerta from "./componentes/Alerta";
import Registro from "./componentes/Registro";

function App() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    clave_1: "",
    clave_2: "",
  });

  const [error, setError] = useState({});
  const [validacionExitosa, setValidacionExitosa] = useState(false);

  function validar_inputs(nombre_input, valor_input) {
    if (valor_input.trim() === "") {
      setError((error) => ({
        ...error,
        [nombre_input]: `El ${nombre_input} debe ser completado`,
      }));
    } else {
      setError((error) => ({
        ...error,
        [nombre_input]: "",
      }));
    }
  }

  function detector_cambio_input(e) {
    const nombre_input = e.target.name;
    const valor_input = e.target.value;
    setForm({ ...form, [nombre_input]: valor_input });
    validar_inputs(nombre_input, valor_input);
  }

  function enviar(e) {
    e.preventDefault();
    //console.log("Enviar");
    const match_contraseñas = validar_password();
    const ingreso_correcto_email = validar_email();

    if (match_contraseñas && ingreso_correcto_email) {
      setValidacionExitosa(true);
    }
  }

  function validar_password() {
    const password1 = form.clave_1;
    const password2 = form.clave_2;
    //console.log(form.clave_2);
    //console.log(form.clave_1);
    if (password1 !== password2) {
      setError((error) => ({
        ...error,
        clave_2: "Las contraseñas no coinciden",
      }));
      return false;
    } else {
      setError((error) => ({
        ...error,
        clave_2: "",
      }));
      return true;
    }
  }

  function validar_email() {
    const email_ingresado = form.email;
    const expresion_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //console.log(email_ingresado)
    if (!expresion_email.test(email_ingresado)) {
      setError((error) => ({
        ...error,
        email: "Formato de correo electrónico no válido",
      }));
      return false;
    } else {
      setError((error) => ({
        ...error,
        email: "",
      }));
      return true;
    }
  }

  return (
    <>
      <Registro />
      <Formulario
        enviar={enviar}
        detector_cambio_input={detector_cambio_input}
      />
      {error.nombre && <Alerta mensaje={error.nombre} />}
      {error.email && <Alerta mensaje={error.email} />}
      {error.clave_1 && <Alerta mensaje={error.clave_1} />}
      {error.clave_2 && <Alerta mensaje={error.clave_2} />}
      {validacionExitosa && <Alerta mensaje_exitoso="¡Validación exitosa!" />}
    </>
  );
}

export default App;
