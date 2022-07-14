const email = document.getElementById('email')
const password = document.getElementById('password')
const background = document.getElementById('background')


password.addEventListener('input', (e) => {
  const inputPassword = e.target.value
  const length =  inputPassword.length
  const blurryEffect = 20 - (length * 2) 
  background.style.filter = `blur(${blurryEffect}px)`
})

