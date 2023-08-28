import React, { useEffect } from "react";
import swal from "sweetalert"; // Asegúrate de que la ruta sea correcta

const ThankForRegister = () => {
  useEffect(() => {
    // Ejemplo de uso de sweetalert
    swal("¡Gracias por registrarte!", "Tu registro ha sido exitoso.", "success");
  }, []);

  return (
    <div>
      {/* Contenido del componente */}
    </div>
  );
};

export default ThankForRegister;