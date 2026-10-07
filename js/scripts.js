function guardarAuto() {
    var modelo = document.getElementById('modelo').value;
    alert(modelo);
    var color = document.getElementById('color').value;
    alert(color);
    var foto = document.getElementById('foto').value;
    alert(foto);
    var activo = document.querySelector('activo').value
    alert(activo);
}

function guardarEscuderia() {
    var nombre = document.getElementById('nombre-escuderia').value;
    alert(nombre);
    var pais = document.getElementById('pais').value;
    alert(pais);
    var motor = document.getElementById('motor').value;
    alert(motor);
}

function guardarCorredor() {
    var nombre = document.getElementById('nombre-corredor').value;
    alert(nombre);
    var numero = document.getElementById('numero').value;
    alert(numero);
    var nacionalidad = document.getElementById('nacionalidad').value;
    alert(nacionalidad);
}

function guardarRelacion() {
    var auto = document.getElementById('select-auto').value;
    alert(auto);
    var escuderia = document.getElementById('select-escuderia').value;
    alert(escuderia);
    var corredor = document.getElementById('select-corredor').value;
    alert(corredor);
}