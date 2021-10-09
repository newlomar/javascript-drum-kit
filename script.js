const keysObj = {
  a: '65',
  s: '83',
  d: '68',
  f: '70',
  g: '71',
  h: '72',
  j: '74',
  k: '75',
  l: '76'
}

document.addEventListener('keypress', (event) => {
  
  const keysDiv = document.querySelector("[data-js='keyboardKeys'")

  const keysArray = [...keysDiv.children]

  const k = event.key.toLocaleLowerCase()

  if (keysObj.hasOwnProperty(k)) {
    
    let keyPressed = document.querySelector(`[data-key='${keysObj[k]}']`)
    keyPressed.classList += ' playing'
    setTimeout(() => {
      keyPressed.classList.remove('playing')
    }, 100);
    let audio = [...document.querySelectorAll(`[data-key='${keysObj[k]}']`)][1]
    audio.currentTime = 0
    audio.play()
  }
})