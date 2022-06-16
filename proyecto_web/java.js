function validar(){ //valido el nombre
    var mensaje="Es obligatorio llenar con :\n";
    var valido=true;
    var nombre=document.formu.nombre.value.trim();
    if (!nombre){
    mensaje += "- Nombre\n";
    document.formu.nombre.focus();
    valido= false; 
    }

    var mail = document.formu.correo.value;
    var patronmail = /^\w+@\w+(\.\w{2,4})$/;
    if (!patronmail.test(mail)) {
        mensaje += "- Un correo valido\n";
        document.formu.correo.focus();
       valido= false;
    }

    var texto = document.formu.texto.value.trim();
    if (texto===""||texto==null){
        mensaje += "- Un mensaje\n";
        document.formu.texto.focus();
        valido= false; 
    }

    var viejo=document.getElementById('contErrores');
    var nuevo=document.createElement('p');
    var text=document.createTextNode(mensaje);
    nuevo.appendChild(text);

    if(valido==false){
        viejo.className=('mal')
        viejo.replaceChildren(nuevo);
      //  viejo.appendChild(nuevo);
    }else{
        viejo.removeAttribute;
        viejo.replaceChildren("");
    }

    if(valido==true){
    alert('Gracias por tu segerencia');
    document.getElementById('contenedor').className='contenedorMensaje';
    document.getElementById('contenedor2').className='contenedorMensaje';
    var contenido = document.formu.texto.value;
    var contenido2 = document.formu.nomPelicula.value;

    var padreViejo = document.getElementById('textCont');
    var padreViejo2 = document.getElementById('textCont2');
    padreViejo.innerHTML=contenido;
    padreViejo2.innerHTML=contenido2;
    }
    

    
    
    return false;
}