const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let password = document.getElementById("password").value;

    if(password.length < 8){

        mensaje.style.color = "red";
        mensaje.innerHTML = "La contraseña debe tener mínimo 8 caracteres";

    }else{

        mensaje.style.color = "green";
        mensaje.innerHTML = "Registro exitoso";

    }

});
