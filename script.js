document.addEventListener('DOMContentLoaded ',function(){
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback')
   
    const username  = document.getElementById('username').value.trim();
    const email  = document.getElementById('email').value.trim();
    const password  = document.getElementById('password').value.trim();
    let isValid = true;
    let messages = [] 
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();  
        if(username.length < 3){
            isValid = false
            messages.push('username must be more than 3 caracters')
        }

        if(!email.include("@") || !email.include('.')){
            isValid = false
            messages.push('invalid email adress')
        }

        if(password.length < 8){
            isValid = false
            messages.push('password must be more than 8 caracters.')
        }
        feedbackDiv.style.display = 'block'

        if(isValid === true){
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = "#28a745"
        }else{
            feedbackDiv.innerHTML = messages
            feedbackDiv.style.color = "#dc3545"
        }
    });
    
})

    