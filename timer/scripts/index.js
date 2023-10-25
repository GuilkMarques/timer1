import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import { ButtonPlay,
  ButtonPause,
  ButtonStop, 
  ButtonSet, 
  minutesDisplay, 
  secondsDisplay } from "./elements.js"
  import Sound from "./sounds.js"

const controls = Controls(
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop)

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  
})

const sound = Sound()

Events({controls, timer, sound})