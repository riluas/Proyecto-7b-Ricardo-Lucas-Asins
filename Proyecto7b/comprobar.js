
function comp() {
  let nombre=document.getElementById('nombre').value;
  let apellidos=document.getElementById('apellidos').value;
  let edad=document.getElementById('edad').value;
  let curso=document.getElementById('curso').value;
  var error=true;
  document.getElementById('nombreOculto').style.display = 'none';
  document.getElementById('apellidoOculto').style.display = 'none';
  document.getElementById('edadOculto').style.display = 'none';
  document.getElementById('numOculto1').style.display = 'none';
  document.getElementById('cursoOculto').style.display = 'none';
  document.getElementById('numOculto2').style.display = 'none';
  if(nombre==""){
    document.getElementById('nombreOculto').style.display = 'block';
    error=false;
  }
  if (apellidos=="") {
    document.getElementById('apellidoOculto').style.display = 'block';
    error=false;
  }
  if (edad=="") {
    document.getElementById('edadOculto').style.display = 'block';
    error=false;
  }
  if (curso=="") {
      document.getElementById('cursoOculto').style.display = 'block';
      error=false;
  }
  if (isNaN(edad)) {
    document.getElementById('numOculto1').style.display = 'block';
    error=false;
  }
  if (isNaN(curso)) {
    document.getElementById('numOculto2').style.display = 'block';
    error=false;
  }
  if (error==false) {
    return false;
  }

}
