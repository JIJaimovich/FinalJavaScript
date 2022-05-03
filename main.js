
// fetch
fetch ('/data.json')
    .then ((res) => res.json())
    .then ((data) => {
      color = data[0].contenido
        
    })

//asignaciones
let cuento = 0;
let validacion = false; 
let aciertos = 0;

// dom
let boton = document.getElementById("botonRta");
let input = document.getElementById("inputRta");
let consigna = document.getElementById("consigna");
let bien = document.getElementById("bien");
let mal = document.getElementById("mal");

// Evento: enter en input
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById("botonRta").click();
    } 
})

// Evento: click en botón
boton.addEventListener ("click", () => {
    let carga = input.value.toLowerCase(); 
    validar();
    if (validacion ==true) {
        practicar()
    }
    document.querySelector('.inputClass').value = '';  
    if (aciertos == 5) {
        consigna.innerText="Congrats! Terminaste la lección!"
        input.disabled = true;
        boton.disabled = true;
    } else {
    } 
})

//Validación de datos: Caso ingreso de números o null
function validar() {
    let carga = input.value;  
    if (carga == null || carga == "") {
        mal.style.display = "block";
        mal.innerHTML = "No olvides escribir la palabra.";
        window.setTimeout("tiempo();", 3000);
        return validacion = false;              
        } else if (!/^[a-zA-Z]+$/.test(carga)) {
            mal.style.display = "block";
            mal.innerHTML = "Solo letras.";
            window.setTimeout("tiempo();", 3000);
            return validacion = false;                
        } else {      
            return validacion = true;  
    }
}

//comparación de valores
function practicar() {   
    let carga = input.value.toLowerCase(); 
    if (carga == color[cuento+1]) {
        bien.style.display = "block";
        bien.innerHTML = `Bien! Let's go!`;
        window.setTimeout("tiempo();", 3000);
        mensaje.innerText=color[cuento+2]; 
        document.getElementById("circulo").style.backgroundColor = color[cuento+3];
        return(
            cuento = cuento+2,
            aciertos = aciertos+1
        )
    } else {
        mal.style.display = "block";
        mal.innerHTML = `Mal! ${color[cuento]} en inglés es ${color[cuento+1]}`;
        window.setTimeout("tiempo();", 3000);
       
    }
}

// temporizador de alertas de bootstrap
function tiempo(){
    document.getElementById("bien").style.display=" none";
    document.getElementById("mal").style.display=" none";
    }
    
// librería tostify
let mensajeTostify = "Vamos a aprender 5 colores en inglés"; 
Toastify({
    text: mensajeTostify,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();    

    
    