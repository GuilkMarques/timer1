export default function Controls(
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop
){

  function play(){
    ButtonPlay.classList.add('hide')
    ButtonPause.classList.remove('hide')
    ButtonSet.classList.add('hide')
    ButtonStop.classList.remove('hide')
  }
  function pause(){
    ButtonPlay.classList.remove('hide')
    ButtonPause.classList.add('hide')
  }

  function reset(){
    ButtonPlay.classList.remove('hide')
    ButtonPause.classList.add('hide')
    ButtonSet.classList.remove('hide')
    ButtonStop.classList.add('hide')
  }

 function getMinutes(){

  let newMinutes = prompt('Quantos minutos?')
  if(!newMinutes){
    return false
  }

  return newMinutes
 }


  return{
    reset,
    play,
    pause,
    getMinutes
  }
} 

