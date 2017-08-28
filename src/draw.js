// INITIAL SETUP

let r, x, y, fi, deg

let n = 2
let d = 20
let k = n / d
let maurer = 71 // 0-360
let size = 300
let rotate = 0
let gg = 0 // Guido Grandi

inputN.value = rangeNValue.innerHTML = rangeN.value = 2
inputD.value = rangeDValue.innerHTML = rangeD.value = 20
inputMaurer.value = rangeMaurerValue.innerHTML = rangeMaurer.value = 71
inputSize.value = rangeSizeValue.innerHTML = rangeSize.value = 300
inputRotate.value = rangeRotateValue.innerHTML = rangeRotate.value = 0
inputGG.value = rangeGGValue.innerHTML = rangeGG.value = 0

const xStart = canvas.width / 2
const yStart = canvas.height / 2

cx.lineCap = 'round'

function draw(n, d, maurer, k, size, rotate, gg) {
  cx.clearRect(0, 0, canvas.width, canvas.height)
  // connecting rose on angle
  if (checkMaurer.checked) {
    for (let i = 0; i < 3600; i++) {
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
draw(n, d, maurer, k, size, rotate, gg)
