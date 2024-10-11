async function fetchUserData(){
    const apiUrl  = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data')
    try {
        const response = await fetch(apiUrl)
        const users = await response.json()
        // console.log(users,'vv');
        
        dataContainer.innerHTML = ''
        const userList = document.createElement('ul')
        
        users.forEach(e=>{
            const li = document.createElement('li')
            li.textContent = e.name
            console.log(',,,',li);
            userList.appendChild(li)
        })
        dataContainer.appendChild(userList)
    
    } catch (error) {
        dataContainer.textContent = ''        
        dataContainer.textContent = 'Failed to load user data.'        
    }
}
document.addEventListener('DOMContentLoaded',fetchUserData())
