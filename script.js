let workTime = 25 * 60
let breakTime = 5 * 60
let timer = null
let isWork = true
let timeLeft = workTime

const timerEl = document.getElementById('timer')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const resetBtn = document.getElementById('reset')
const fullscreenBtn = document.getElementById('fullscreen')

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`
  localStorage.setItem('pomodoro-timeLeft', timeLeft.toString())
  localStorage.setItem('pomodoro-isWork', isWork ? '1' : '0')
}

function tick() {
  if (timeLeft > 0) {
    timeLeft--
    updateDisplay()
  } else {
    isWork = !isWork
    timeLeft = isWork ? workTime : breakTime
    updateDisplay()
    alert(isWork ? 'Back to work!' : 'Time for a break!')
  }
}

interface DocumentWithFullscreen extends HTMLDocument {
  mozFullScreenElement?: Element
  msFullscreenElement?: Element
  webkitFullscreenElement?: Element
  msExitFullscreen?: () => void
  mozCancelFullScreen?: () => void
  webkitExitFullscreen?: () => void
}

function isFullScreen(): boolean {
  const doc = document as DocumentWithFullscreen
  return !!(
    doc.fullscreenElement ||
    doc.mozFullScreenElement ||
    doc.webkitFullscreenElement ||
    doc.msFullscreenElement
  )
}

interface DocumentElementWithFullscreen extends HTMLElement {
  msRequestFullscreen?: () => void
  mozRequestFullScreen?: () => void
  webkitRequestFullscreen?: () => void
}

function requestFullScreen(element: DocumentElementWithFullscreen) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  }
}

function exitFullScreen(doc: DocumentWithFullscreen) {
  if (doc.exitFullscreen) {
    doc.exitFullscreen()
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen()
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen()
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen()
  }
}

function toggleFullScreen(): void {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
    fullscreenBtn.innerHTML = `<i class="fa-solid fa-down-left-and-up-right-to-center"></i>`
  } else {
    document.exitFullscreen()
    fullscreenBtn.innerHTML = `<i class="fa-solid fa-up-right-and-down-left-from-center"></i>`

  }
}

fullscreenBtn.addEventListener('click', () => {
  toggleFullScreen()
})

startBtn.addEventListener('click', () => {
  if (!timer) {
    timer = setInterval(tick, 1000)
    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
  }
})

pauseBtn.addEventListener('click', () => {
  if (timer) {
    clearInterval(timer)
    timer = null
    startBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
  }
})

resetBtn.addEventListener('click', () => {
  clearInterval(timer!)
  timer = null
  isWork = true
  timeLeft = workTime
  startBtn.style.display = 'block'
  pauseBtn.style.display = 'none'
  updateDisplay()
})

const storedTime = localStorage.getItem('pomodoro-timeLeft')
const storedIsWork = localStorage.getItem('pomodoro-isWork')
if (storedTime && storedIsWork !== null) {
  timeLeft = parseInt(storedTime)
  isWork = storedIsWork === '1'
}

updateDisplay()
