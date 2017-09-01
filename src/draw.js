// INITIAL SETUP

let r, x, y, fi, deg
let settings = {
  n : 2,
  d : 20,
  maurer : 71,
  size : 400,
  rotate : 0,
  gg : 0
}

canvas.width = document.body.offsetWidth
canvas.height = 930

const xStart = canvas.width / 2
const yStart = canvas.height / 2

cx.lineCap = 'round'

function draw() {
  const {n, d, maurer, size, rotate, gg} = settings
  let k = n / d
  cx.clearRect(0, 0, canvas.width, canvas.height)
  // connecting rose on angle
  if (checkMaurer.checked) {
    for (let i = 0; i <= 3600; i++) {
      if (colorize.checked) {
        if (i < 2000) {
          cx.strokeStyle = `hsl(0, 0%, 50%)`
        } else {
          cx.strokeStyle = `hsl(${i}, 100%, 50%)`
        }
      } else {
        cx.strokeStyle = 'white'
      }
      cx.lineWidth = 0.5
      cx.beginPath()
      fi = maurer * i * Math.PI / 180
      r = Math.sin(-k * fi - rotate) * size + Math.round(gg)
      x = xStart + r * Math.cos(fi)
      y = yStart + r * Math.sin(fi)
      if (i === 0) {
        cx.moveTo(x, y)
      } else {
        cx.moveTo(xPrev, yPrev)
      }
      xPrev = x
      yPrev = y
      cx.lineTo(x, y)
      cx.stroke()
    }
  }
  // drawing rose
  if (checkRose.checked) {
    cx.beginPath()
    cx.strokeStyle = 'red'
    cx.lineWidth = 0.1
    for (let a = 0; a < 3600 * Math.ceil(d); a++) {
      deg = a * Math.PI / 180
      r = Math.sin(-k * deg - rotate) * size + Math.round(gg)
      x = xStart + r * Math.cos(deg)
      y = xStart + r * Math.sin(deg)
      cx.lineTo(x, y)
    }
    cx.stroke()
  }
}
// pre-render
draw()

const datgui = () => {
  gui = new dat.GUI()

  // Settings
  let guiSettings = gui.addFolder('Settings')
  console.log(guiSettings)
  guiSettings.add(settings, 'lines', 5, 50).step(1).onChange(draw)
  guiSettings.add(settings, 'amplitudeX', 20, 300).step(1).onChange(draw)
  guiSettings.add(settings, 'amplitudeY', 0, 200).step(1).onChange(draw)
  guiSettings.add(settings, 'offsetX', -20, 20).step(1).onChange(draw)
  guiSettings.add(settings, 'smoothness', 0.5, 10).step(0.2).onChange(draw)
  guiSettings.add(settings, 'fill', false).onChange(draw)
  guiSettings.add(settings, 'crazyness', false).onChange(draw)
  guiSettings.open()

  // Randomize
  let guiRandomize = {
    randomize: function() {
      randomize()
    }
  }
  gui.add(guiRandomize, 'randomize')

  return gui
}

datgui()
