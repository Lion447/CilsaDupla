function validarEmail() {
    const emailInput = document.getElementById("emailInput").value;
    const comentarioElement = document.getElementById("revisarEmail");
    const emailExpresion = /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/;
  
    if (emailExpresion.test(emailInput)) {
        comentarioElement.textContent = ""; 
    } else {
        comentarioElement.textContent = "Por favor use un email válido.";
    }
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    "use strict"
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation")
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener("submit", event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add("was-validated")
      }, false)
    })
  })()

