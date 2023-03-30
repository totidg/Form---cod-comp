function createRow(event) {
 
  const form = document.querySelector('form');
  
  event.preventDefault(); // evita que la página se recargue al enviar el formulario
  
  // Asignar a las variables el valor ingresado en los inputs
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let edad = document.getElementById('edad').value;
  let dni = document.getElementById('dni').value;
  let correo = document.getElementById('correo').value;

  // Crea una fila dentro de tbody

  let tableRow = document.createElement('tr');

  // Crea las 5 columnas con los datos

  let tDataNombre = document.createElement('td');
  tDataNombre.innerHTML = nombre;
  tableRow.appendChild(tDataNombre);

  let tDataApellido = document.createElement('td');
  tDataApellido.innerHTML = apellido;
  tableRow.appendChild(tDataApellido);

  let tDataEdad = document.createElement('td');
  tDataEdad.innerHTML = edad;
  tableRow.appendChild(tDataEdad);

  let tDataDni = document.createElement('td');
  tDataDni.innerHTML = dni;
  tableRow.appendChild(tDataDni);

  let tDataCorreo = document.createElement('td');
  tDataCorreo.innerHTML = correo;
  tableRow.appendChild(tDataCorreo);

  // se le agrega una nueva tabla.

  document.querySelector('tbody').appendChild(tableRow);
  
  // cada vez que se agregue un usuario, se limpian los datos.

 form.reset();
}
