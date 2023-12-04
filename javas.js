document.addEventListener("DOMContentLoaded", function () {

    var formulario = document.getElementById("formulario");
    const nav = document.querySelector("#navegacion");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    })

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    })

    if (formulario != null) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            var nombre = document.getElementById("nombre").value;
            var correo = document.getElementById("correo").value;
            if (document.getElementById("asunto") != null) {
                var asunto = document.getElementById("asunto").value;
            }
            if (document.getElementById("mensaje") != null) {
                var mensaje = document.getElementById("mensaje").value;
            }

            if (document.getElementById("monto") != null) {
                var monto = document.getElementById("monto").value;
            }

            if (document.getElementById("metodo") != null) {
                var metodo = document.getElementById("metodo").value;
            }

            var errores = "";


            if (nombre == "") {
                errores += "El nombre es obligatorio\n";
            } else if (!/^[A-Za-z]+$/.test(nombre)) {
                errores += "El nombre solo puede contener letras\n";
            }

            if (correo == "") {
                errores += "El correo es obligatorio\n";
            } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(correo)) {
                errores += "El correo no tiene un formato válido\n";
            }

            if (asunto == "" && document.getElementById("asunto") != null) {
                errores += "El asunto es obligatorio\n";
            }

            if (mensaje == "" && document.getElementById("mensaje") != null) {
                errores += "El mensaje es obligatorio\n";
            }

            if (monto == "" && document.getElementById("monto") != null) {
                errores += "El monto es obligatorio\n";
            } else if ((isNaN(monto) || monto <= 0) && document.getElementById("monto") != null) {
                errores += "El monto debe ser un número positivo\n";
            }

            if (metodo == "" && document.getElementById("metodo") != null) {
                errores += "El método de pago es obligatorio\n";
            } else if (!["tarjeta", "paypal", "transferencia"].includes(metodo) && document.getElementById("metodo") != null) {
                errores += "El método de pago no es válido\n";
            }

            if (errores != "") {
                alert(errores);
            } else {
                alert("El envio fue un exito!!");
                location.reload();
            }
        });
    }

});
