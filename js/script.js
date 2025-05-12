'use strict'
const $contactForm = document.getElementById('contactForm')

$contactForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const name = $contactForm.name.value;
    const lastName = $contactForm.lastName.value;
    const message = $contactForm.message.value;
    console.log(name, lastName, message);
    const result =  `${name} ${lastName},gracias por tu mensaje: "${message}". En breve nos pondremos en contacto contigo.`;  
    alert(result);
    $contactForm.reset();      
});
 