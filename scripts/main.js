let miImagen = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/chrome3.png') {
      miImage.setAttribute('src','images/firefox-icon.png');
    } else {
      miImage.setAttribute('src', 'images/chrome3.png');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre){
        estableceNombreUsuario();
    }
    else{
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Navegar es genial, ' + miNombre;}
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Google es genial, ' + nombreAlmacenado;
}


miBoton.onclick = function() {
    estableceNombreUsuario();
}