window.addEventListener('keydown', key => {
  playAudio( key.code.toLowerCase() )
  highlightKey( key.code.toLowerCase() )
})

const playAudio = keyAudio => {
  let audio = document.querySelector(`#s_${keyAudio}`)
  
  if(!audio) return

  audio.currentTime = 0
  audio.play()
}

const highlightKey = keyPressed => {
  let arrKeys = document.querySelectorAll('.key')

  arrKeys.forEach(key => {
    key.classList.remove('active')

    if(key.dataset.key === keyPressed){
      key.classList.toggle('active')

      setTimeout(function(){
        key.classList.remove('active')
      }, 200)
    }
  })
}

const playWithButton = () => {
  const input = document.querySelector('#input')
  let letterCombo = input.value

  if(letterCombo !== ''){
    let arrLetter = letterCombo.split('')
    let interval = 0

    for(let letter of arrLetter){

      setTimeout( () => {
        playAudio(`key${letter}`)
        highlightKey(`key${letter}`)
      }, interval)

      interval += 250
    }
  }
}
const button = document.querySelector('button')
button.addEventListener('click', () => {
  playWithButton()
})