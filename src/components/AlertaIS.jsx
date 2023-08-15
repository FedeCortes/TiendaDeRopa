import React, { useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AlertaIS = () => {
  useEffect(() => {
    swal({
      title: "Inicie Sesion",
      text: "Para poder agregar items a tu carrito o a favoritos inicie sesion",
      icon: "info",
      buttons: false, // Desactiva los botones predeterminados de SweetAlert
    });
  }, []);

  return <div></div>;
};

export default AlertaIS;
