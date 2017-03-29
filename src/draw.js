// INITIAL SETUP

let r, x, y, fi, deg;

let n = 20;
let d = 2;
let k = n/d;
let maurer = 71; // 0-360
let size = 300;
let rotate = 0;
let gg = 0; // Guido Grandi

const xStart = canvas.width/2;
const yStart = canvas.height/2;

cx.lineCap = 'round';

function draw(n, d, maurer, k,size, rotate,gg) {
  cx.clearRect(0, 0, canvas.width, canvas.height);
  // connecting rose on angle
  if (checkMaurer.checked) {
    cx.beginPath();
    cx.strokeStyle = 'blue';
    for (let i = 0; i < 3600; i++) {
      fi = (maurer * i) * Math.PI / 180;
      r = Math.sin(-k * fi-rotate) * (size) + Math.round(gg);
      x = xStart + r * Math.cos(fi);
      y = yStart + r * Math.sin(fi);
      cx.lineTo(x, y);
    }
    cx.stroke();
  }
  // drawing rose
  if (checkRose.checked) {
    cx.beginPath();
    cx.strokeStyle = 'red';
    for (let a = 0; a < 3600 * Math.ceil(d); a++) {
      deg = a * Math.PI / 180;
      r = Math.sin(-k * deg-rotate) * (size) + Math.round(gg);
      x = xStart + r * Math.cos(deg);
      y = xStart + r * Math.sin(deg);
      cx.lineTo(x, y);
    }
    cx.stroke();
  }
}
// pre-render
draw(n, d, maurer, k,size,rotate,gg);
