const Loginform =document.querySelector('#Loginform')
Loginform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const users= JSON.parse(localStorage.getItem('users')) || []
    const validuser= users.find(user=> user.email === email && user.password === password)
    if (!validuser){
        return alert('usuario y/o contraseña incorrectos')
    }
    alert (`bienvenido ${validuser.name}`)
    localStorage.setItem('login_sucess', JSON.stringify(validuser))
    window.location.href= 'shop.html'
})
