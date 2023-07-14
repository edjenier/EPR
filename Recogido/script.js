// Obtener el formulario
const form = document.querySelector('form');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  // Obtener los valores del formulario
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const image = document.getElementById('image').files[0];

  // Realizar aquí las acciones necesarias con los datos del formulario
  // Por ejemplo, enviar los datos al servidor o procesar la imagen

  // Mostrar los datos en la consola para demostración
  console.log('Correo electrónico:', email);
  console.log('Teléfono:', phone);
  console.log('Dirección:', address);
  console.log('Imagen:', image);
});
