// Selección de elementos del DOM
const botonEncriptar = document.querySelector(".encriptar_button");
const textoAUsar = document.querySelector(".texto_usuario");
const aviso = document.querySelector(".texto_info");
const textoOriginalAviso = aviso.textContent; // Guardar el texto original
const textoResultado = document.querySelector(".resultado");
const zonaResultadoTexto = document.querySelector(".zona_resultado_texto");
const zonaResultadoImagen = document.querySelector(".muñeco");
const botonCopiar = document.querySelector(".copiar_button");
const botonDesencriptar = document.querySelector(".desencriptar_button");
const botonLimpiar = document.querySelector(".trash_button");

// Función para verificar si el modo oscuro está activo
function isDarkModeActive() {
    return document.body.classList.contains("active");
}

//------------- Mostrar botón limpiar cuando se escribe ------------//

textoAUsar.addEventListener("input", () => {
    if (textoAUsar.value !== "") {
        botonLimpiar.style.visibility = "visible"; // Muestra el botón limpiar
    } else {
        botonLimpiar.style.visibility = "hidden"; // Oculta el botón limpiar si no hay texto
    }
});

//------------ Código para encriptar contenido ------------//

botonEncriptar.addEventListener("click", e => {
    e.preventDefault(); // Previene la recarga de la página

    let texto = textoAUsar.value; // Obtiene el valor ingresado en el área de texto
    let txt = texto.normalize("NFD").replace(/[$\.¿\\¡@#%&*()_|}\{[\]>\<:";']/g, "").replace(/n\u0303/g, "ñ"); // Normaliza el texto y elimina caracteres especiales

    console.log(txt); // Imprime el texto normalizado en la consola para depuración

    // Verifica si el texto ya está encriptado
    if (texto.includes("enter") || texto.includes("imes") || texto.includes("aqi") || texto.includes("ober") || texto.includes("ufat")) {
        if (isDarkModeActive()) {
            aviso.style.background = "#ffffff"; // Fondo blanco
            aviso.style.color = "#000000"; // Texto negro
        } else {
            aviso.style.background = "#b600da"; // Fondo morado
            aviso.style.color = "#ffffff"; // Texto cyan
        }
        aviso.style.fontWeight = "800"; // Cambia el peso de la fuente del aviso
        aviso.textContent = "El texto ya está encriptado"; // Muestra mensaje indicando que el texto ya está encriptado

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = textoOriginalAviso; // Restablecer el texto original del aviso
        }, 2000);

        return; // Sale de la función para que no se ejecute la encriptación
    }

   if (texto == "") { // Si el texto está vacío
        if (isDarkModeActive()) {
            aviso.style.background = "#ffffff"; // Fondo blanco
            aviso.style.color = "#000000"; // Texto negro
        } else {
            aviso.style.background = "#b600da"; // Fondo morado
            aviso.style.color = "#ffffff"; // Texto cyan
        }
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = textoOriginalAviso; // Restablecer el texto original del aviso
        }, 2000);

    } else if (texto !== txt) { // Si el texto contiene caracteres especiales o acentos
        if (isDarkModeActive()) {
            aviso.style.background = "#ffffff"; // Fondo blanco
            aviso.style.color = "#000000"; // Texto negro
        } else {
            aviso.style.background = "#b600da"; // Fondo morado
            aviso.style.color = "#ffffff"; // Texto cyan
        }
        aviso.style.fontWeight = "800"; // Cambia el peso de la fuente del aviso
        aviso.textContent = "El texto no debe tener acentos y/o caracteres especiales"; // Muestra mensaje de que el texto no debe tener acentos o caracteres especiales

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = textoOriginalAviso; // Restablecer el texto original del aviso
        }, 2000);

    } else if (texto !== texto.toLowerCase()) { // Si el texto contiene mayúsculas
        if (isDarkModeActive()) {
            aviso.style.background = "#ffffff"; // Fondo blanco
            aviso.style.color = "#000000"; // Texto negro
        } else {
            aviso.style.background = "#b600da"; // Fondo morado
            aviso.style.color = "#ffffff"; // Texto cyan
        }
        aviso.style.fontWeight = "800"; // Cambia el peso de la fuente del aviso
        aviso.textContent = "El texto no debe contener mayusculas"; // Muestra mensaje de que el texto no debe contener mayúsculas

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = textoOriginalAviso; // Restablecer el texto original del aviso
        }, 2000);

    } else {
        // Reemplazos para encriptar el texto
        texto = texto.replace(/e/mg, "ecter"); // Reemplaza "e" por "ecter"
        texto = texto.replace(/i/mg, "imes"); // Reemplaza "i" por "imes"
        texto = texto.replace(/a/mg, "aqi"); // Reemplaza "a" por "aqi"
        texto = texto.replace(/o/mg, "ober"); // Reemplaza "o" por "ober"
        texto = texto.replace(/u/mg, "ufat"); // Reemplaza "u" por "ufat"

        textoResultado.innerHTML = texto; // Muestra el texto encriptado en el área de resultado
        zonaResultadoTexto.remove(); // Elimina el texto de la zona de resultado
        zonaResultadoImagen.remove(); // Elimina la imagen de la zona de resultado
        botonCopiar.style.visibility = "inherit"; // Muestra el botón de copiar
        botonLimpiar.style.visibility = "inherit";
    }
});

//------------ Código para desencriptar contenido ------------//

botonDesencriptar.addEventListener("click", e => {
    e.preventDefault(); // Previene la recarga de la página

    let texto = textoAUsar.value; // Obtiene el valor ingresado en el área de texto
    let txt = texto.normalize("NFD").replace(/[$\.¿\\¡@#%&*()_|}\{[\]>\<:";']/g, "").replace(/n\u0303/g, "ñ"); // Normaliza el texto y elimina caracteres especiales

    console.log(txt); // Imprime el texto normalizado en la consola para depuración

    if (texto == "") { // Si el texto está vacío
        if (isDarkModeActive()) {
            aviso.style.background = "#ffffff"; // Fondo blanco
            aviso.style.color = "#000000"; // Texto negro
        } else {
            aviso.style.background = "#b600da"; // Fondo morado
            aviso.style.color = "#ffffff"; // Texto cyan
        }
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = textoOriginalAviso; // Restablecer el texto original del aviso
        }, 2000);

    } else if (texto !== txt) { // Si el texto contiene caracteres especiales o acentos
        if (isDarkModeActive()) {
            aviso.style.background = "#ffffff"; // Fondo blanco
            aviso.style.color = "#000000"; // Texto negro
        } else {
            aviso.style.background = "#b600da"; // Fondo morado
            aviso.style.color = "#ffffff"; // Texto cyan
        }
        aviso.style.fontWeight = "800"; // Cambia el peso de la fuente del aviso
        aviso.textContent = "El texto no debe tener acentos y/o caracteres especiales"; // Muestra mensaje de que el texto no debe tener acentos o caracteres especiales

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = textoOriginalAviso; // Restablecer el texto original del aviso
        }, 2000);

    } else if (texto !== texto.toLowerCase()) { // Si el texto contiene mayúsculas
        if (isDarkModeActive()) {
            aviso.style.background = "#ffffff"; // Fondo blanco
            aviso.style.color = "#000000"; // Texto negro
        } else {
            aviso.style.background = "#b600da"; // Fondo morado
            aviso.style.color = "#ffffff"; // Texto cyan
        }
        aviso.style.fontWeight = "800"; // Cambia el peso de la fuente del aviso
        aviso.textContent = "El texto no debe contener mayusculas"; // Muestra mensaje de que el texto no debe contener mayúsculas

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = textoOriginalAviso; // Restablecer el texto original del aviso
        }, 2000);
        
    } else {
        // Reemplazos para desencriptar el texto
        texto = texto.replace(/ecter/mg, "e"); // Reemplaza "ecter" por "e"
        texto = texto.replace(/imes/mg, "i"); // Reemplaza "imes" por "i"
        texto = texto.replace(/aqi/mg, "a"); // Reemplaza "aqi" por "a"
        texto = texto.replace(/ober/mg, "o"); // Reemplaza "ober" por "o"
        texto = texto.replace(/ufat/mg, "u"); // Reemplaza "ufat" por "u"

        textoResultado.innerHTML = texto; // Muestra el texto desencriptado en el área de resultado
        zonaResultadoTexto.remove(); // Elimina el texto de la zona de resultado
        zonaResultadoImagen.remove(); // Elimina la imagen de la zona de resultado
        botonCopiar.style.visibility = "inherit"; // Muestra el botón de copiar
    }
});

//------------- Código uso botón limpiar ------------//

botonLimpiar.addEventListener("click", e => {
    e.preventDefault(); // Previene la recarga de la página

    // Restablecer la interfaz a su estado original
    textoAUsar.value = ""; // Limpia el campo de texto
    textoResultado.innerHTML = ""; // Limpia el área de resultado
    botonCopiar.style.visibility = "hidden"; // Oculta el botón de copiar
    botonLimpiar.style.visibility = "hidden"; // Oculta el botón de limpiar

    // Reinsertar los elementos removidos
    document.querySelector(".zona_resultado").appendChild(zonaResultadoImagen); // Reinsertar la imagen en la zona de resultado
    document.querySelector(".zona_resultado").appendChild(zonaResultadoTexto); // Reinsertar el texto en la zona de resultado
    

    // Restablecer el texto del aviso si se había modificado
    aviso.removeAttribute("style"); // Restaura el estilo original del aviso
    aviso.textContent = "Solo letras minúsculas y sin acentos"; // Restablece el texto del aviso a su valor original
});

//------------- Código uso botón copiar ------------//

// Evento click en el botón de copiar
botonCopiar.addEventListener("click", e => {
    e.preventDefault(); // Previene la recarga de la página

    // Copiar el texto del área de resultado al portapapeles
    navigator.clipboard.writeText(textoResultado.textContent).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });

    // Restablecer la interfaz después de copiar
    textoAUsar.value = ""; // Limpia el campo de texto
    textoResultado.innerHTML = ""; // Limpia el área de resultado
    botonCopiar.style.visibility = "hidden"; // Oculta el botón de copiar nuevamente
    botonLimpiar.style.visibility = "hidden"; // Oculta el botón de limpiar

    // Reinsertar los elementos removidos
    document.querySelector(".zona_resultado").appendChild(zonaResultadoImagen); // Reinsertar la imagen en la zona de resultado
    document.querySelector(".zona_resultado").appendChild(zonaResultadoTexto); // Reinsertar el texto en la zona de resultado
    

    // Restablecer el texto del aviso si se había modificado
    aviso.removeAttribute("style"); // Restaura el estilo original del aviso
    aviso.textContent = "Solo letras minúsculas y sin acentos"; // Restablece el texto del aviso a su valor original
});

