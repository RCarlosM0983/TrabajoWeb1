
let imagenes = new Array("imagenes/foto1.jpg", "imagenes/foto2.jpg", "imagenes/foto3.jpg", "imagenes/foto4.jpg",
 "imagenes/foto5.jpg", "imagenes/foto6.jpg", "imagenes/foto7.jpg", "imagenes/foto8.jpg", "imagenes/foto9.jpg",
 "imagenes/foto10.jpg", "imagenes/foto11.jpg", "imagenes/foto12.jpg", "imagenes/foto13.jpg", "imagenes/foto14.jpg",
 "imagenes/foto15.jpg", "imagenes/foto16.jpg", "imagenes/foto17.jpg", "imagenes/foto18.jpg", "imagenes/foto19.jpg",
 "imagenes/foto20.jpg", "imagenes/foto21.jpg", "imagenes/foto22.jpg");
let num = 1;
let divPrincipal = document.querySelector("#principal");
let divSecundario = document.querySelector("#secundario"); 

function cerrarImag(){
    divPrincipal.style.display = "none";
    
}

function abrirImag(referencia){
   divPrincipal.style.display = "flex";
   document.querySelector("#foto").src = referencia;
   num = imagenes.indexOf(referencia)+ 1;
}
function siguienteImag(){
    num++;
    var foto = document.querySelector("#foto");
   if(num > 22) {
       num = 1;
       foto.src = "imagenes/foto"+num+".jpg"
   }else{
    foto.src = "imagenes/foto"+num+".jpg"
   }
}
function anteriorImag(){
    num--;
    var foto = document.querySelector("#foto");
   if(num < 1) {
       num = 22;
       foto.src = "imagenes/foto"+num+".jpg"
   }else{
    foto.src = "imagenes/foto"+num+".jpg"
   } 

 }
 /*/////////////////////
 FORMULARIO
 /////////////////////*/
 function cerrarForm(){
   document.querySelector(".principalF").style.display = "none";
 }
 function cerrarLista(){
    document.querySelector(".principalLR").style.display = "none";
}
 function abrirForm(){
    document.getElementById("errores").innerHTML="";
    document.querySelector(".principalF").style.display = "flex";
    document.getElementById("limpiar").reset();
    document.getElementById("nombre").style.border = "1px solid black";
    document.getElementById("email").style.border = "1px solid black";
    document.getElementById("dni").style.border = "1px solid black";
    document.getElementById("edad").style.border = "1px solid black";
    document.getElementById("contraseña1").style.border = "1px solid black";
    document.getElementById("contraseña2").style.border = "1px solid black";
   
 }
 function validar(){

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var dni = document.getElementById("dni").value;
    var edad = document.getElementById("edad").value;
    var contrasenia1= document.getElementById("contraseña1").value;
    var contrasenia2= document.getElementById("contraseña2").value;
    var expresion =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})+$/;
    var errores = [];

    
    document.getElementById("errores").innerHTML="";

    if(nombre.length < 1){
        errores.push("Debe ingresar un Nombre");
        document.getElementById("nombre").style.border = "2px solid red";
    }else{
        document.getElementById("nombre").style.border = "1px solid black";
    }

    if(dni.length < 1){
        errores.push("Debe ingresar el DNI");
        document.getElementById("dni").style.border = "2px solid red"; 
    }else{
        document.getElementById("dni").style.border = "1px solid black";
    }

    if(!expresion.test(email)){
        errores.push("El email no es valido");
        document.getElementById("email").style.border = "2px solid red";
    }else{
        document.getElementById("email").style.border = "1px solid black";
    }

    if(edad < 18){
        errores.push("Debe ser mayor de edad");
        document.getElementById("edad").style.border = "2px solid red";
    }else{
        document.getElementById("edad").style.border = "1px solid black";
    }
    if(contrasenia1.length < 8){
        errores.push("La contraseña debe contener al menos 8 caracteres")
        document.getElementById("contraseña1").style.border = "2px solid red";
    }else{
        document.getElementById("contraseña1").style.border = "1px solid black"; 
    }
    if(contrasenia2 != contrasenia1){
        errores.push("Las contraseñas no coinciden");
        document.getElementById("contraseña2").style.border = "2px solid red";
    }else{
        document.getElementById("contraseña2").style.border = "1px solid black"; 
    }

    if(errores.length > 0){
        let cartel = "";
        for(var i=0; i < errores.length; i++){
          cartel += "<li>"+errores[i]+"</li>"
        }
        document.querySelector("#errores").innerHTML = cartel;
        }else{
            document.querySelector(".principalF").style.display = "none";
            alert("¡¡Enviado Correctamente!!"); 

            document.querySelector(".principalLR").style.display = "flex";          
            let item = document.createElement("li");
            item.innerHTML = nombre+"  Edad: "+edad+ "  E-Mail: "+ email ;
            let listaRegis = document.getElementById("registrados");
            listaRegis.appendChild(item);
        }
        return false;
}