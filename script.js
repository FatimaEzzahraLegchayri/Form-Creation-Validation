document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback')
    
    form.addEventListener('submit', function(event) {
        const username  = document.getElementById('username').value.trim();
        const email  = document.getElementById('email').value.trim();
        const password  = document.getElementById('password').value.trim();
        let isValid = true;
        let messages = [] 

        event.preventDefault();  
        if(username.length < 3){
            isValid = false
            messages.push('username must be more than 3 caracters')
        }

        if(!email.includes("@") || !email.includes('.')){
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
            feedbackDiv.innerHTML = messages.join('<br>')
            feedbackDiv.style.color = "#dc3545"
        }
    });
    
})

    