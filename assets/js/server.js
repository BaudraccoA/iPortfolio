document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Aquí puedes agregar el código para enviar el correo electrónico utilizando tu servicio o servidor de correo preferido.
    // Por ejemplo, puedes utilizar la API de envío de correo de tu proveedor de correo electrónico o un servicio de backend personalizado.
  
    // Asegúrate de reemplazar los siguientes valores con tus propios datos de correo electrónico:
    const destinatario = 'baudra21@gmail.com';
    const cuerpoCorreo = `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`;
  
    // Ejemplo de código utilizando la API Fetch y un servicio de correo electrónico ficticio:
    fetch('https://mail.google.com/mail/u/0/?pli=1#inbox', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: destinatario,
        subject: 'Nuevo mensaje de contacto',
        body: cuerpoCorreo
      })
    })
    .then(function(response) {
      if (response.ok) {
        // El correo se envió correctamente
        document.getElementById('contact-form').reset();
        document.querySelector('.sent-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
      } else {
        // Hubo un error al enviar el correo
        throw new Error('Error al enviar el correo');
      }
    })
    .catch(function(error) {
      console.error(error);
      document.querySelector('.sent-message').style.display = 'none';
      document.querySelector('.error-message').style.display = 'block';
    });
  });
  