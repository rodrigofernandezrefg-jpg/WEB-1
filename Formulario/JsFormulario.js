document.getElementById("formulario").addEventListener("submit",function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const documento = document.getElementById("dni").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const motivo = document.getElementById("motivo").value;
    const comentario = document.getElementById("comentario").value.trim();

    const errores = [];

    const errorEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorTelefono = /^[0-9]{7,15}$/;
    const errorDni = /^[0-9]{7,8}$/;
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

    if(nombre === "" || !soloLetras.test(nombre)){
        errores.push("El nombre es obligatorio y debe contener solo letras");
    }

    if(apellido === "" || !soloLetras.test(apellido)){
        errores.push("El apellido es obligatorio y debe contener solo letras");
    }

    if(!errorDni.test(documento) || documento === ""){
        errores.push("El documenyto es obligatorio y debe tener entre 7 a 8 numeros");
    }

    if(!errorTelefono.test(telefono)){
        errores.push("El telefono es obligatorio y debe contener entre 7 a 15 caracteres");
    }

    if(!errorEmail.test(email)){
        errores.push("El email no es valido");
    }

    if(motivo === ""){
        errores.push("Seleccione el motivo de la cosulta");
    }

    if(comentario.length < 10){
        errores.push("El mensaje es obligatorio y debe tener al menos de 10 caracteres");
    }

    const divErrores = document.getElementById("errores");
    const resultado = document.getElementById("mensajes");

    if(errores.length > 0){
        divErrores.innerHTML = errores.join("<br>");
        resultado.innerHTML = "";
        return;
    }

    divErrores.innerHTML = "";
    resultado.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = "Datos enviados:";
    resultado.appendChild(titulo);

    const lista = document.createElement("ul");

    const datos = [
        `Nombre: ${nombre}`,
        `Apellido: ${apellido}`,
        `Email: ${email}`,
        `DNI: ${documento}`,
        `Teléfono: ${telefono}`,
        `Motivo: ${motivo}`,
        `Mensaje: ${comentario}`
    ];

    datos.forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;
        lista.appendChild(li);
    });

    resultado.appendChild(lista);
});