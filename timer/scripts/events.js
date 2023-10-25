import{
  ButtonPlay, 
  ButtonPause, 
  ButtonSet,
  ButtonSoundOn, 
  ButtonSoundOff,
  ButtonStop
} from "./elements.js"

export default function({controls, timer, sound}){

ButtonPlay.addEventListener('click', event =>{
  controls.play()
  timer.countdown()
  sound.pressButton()
})

ButtonPause.addEventListener('click', event =>{
  controls.pause()
  timer.hold()
  sound.pressButton()

})

ButtonStop.addEventListener('click', event =>{
 controls.reset()
 timer.reset()
 sound.pressButton()

})

ButtonSoundOff.addEventListener('click', event =>{
  ButtonSoundOn.classList.remove('hide')
  ButtonSoundOff.classList.add('hide') 
  sound.bgAudio.play()

})

ButtonSoundOn.addEventListener('click', event =>{
  ButtonSoundOn.classList.add('hide')
  ButtonSoundOff.classList.remove('hide')
  sound.bgAudio.pause()
})

ButtonSet.addEventListener('click', event=>{
  let newMinutes = controls.getMinutes()

  if(!newMinutes){
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)  
}
)
}
