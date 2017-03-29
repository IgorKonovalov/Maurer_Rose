const canvas = document.getElementById('rose');
const cx = canvas.getContext('2d');

let r, x, y, fi, deg;

const inputN = document.getElementById('n');
const inputD = document.getElementById('d');
const inputMaurer = document.getElementById('maurer');
const inputSize = document.getElementById('size');
const inputRotate = document.getElementById('rotate');
const inputGG= document.getElementById('gg');
const arrayInputs = [inputN, inputD, inputMaurer, inputSize, inputRotate, inputGG];
const checkRose = document.getElementById('showRose');
const checkMaurer = document.getElementById('showMaurer');
const arrayCheck = [checkRose, checkMaurer];

// INITIAL CONST

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

// VISUAL SETUP


// sliders setup

let elementsArray = []
const rangeNValue = document.getElementById('rangeNValue');
const rangeN = document.getElementById('rangeN');
elementsArray.push(rangeN);
rangeNValue.innerHTML = rangeN.value;

const rangeDValue = document.getElementById('rangeDValue');
const rangeD = document.getElementById('rangeD');
elementsArray.push(rangeD);
rangeDValue.innerHTML = rangeD.value;

const rangeMaurerValue = document.getElementById('rangeMaurerValue');
const rangeMaurer = document.getElementById('rangeMaurer');
elementsArray.push(rangeMaurer);
rangeMaurerValue.innerHTML = rangeMaurer.value;

const rangeRotateValue = document.getElementById('rangeRotateValue');
const rangeRotate = document.getElementById('rangeRotate');
elementsArray.push(rangeRotate);
rangeRotateValue.innerHTML = rangeRotate.value;


const rangeGGValue = document.getElementById('rangeGGValue');
const rangeGG = document.getElementById('rangeGG');
elementsArray.push(rangeGG);
rangeGGValue.innerHTML = rangeGG.value;

const rangeSizeValue = document.getElementById('rangeSizeValue');
const rangeSize = document.getElementById('rangeSize');
elementsArray.push(rangeSize);
rangeSizeValue.innerHTML = rangeSize.value;

// change events handling
elementsArray.forEach((element)=>{
  element.addEventListener('mousemove', () => {
    rangeNValue.innerHTML = rangeN.value;
    rangeDValue.innerHTML = rangeD.value;
    rangeMaurerValue.innerHTML = rangeMaurer.value;
    rangeGGValue.innerHTML = rangeGG.value;
    rangeSizeValue.innerHTML = rangeSize.value;
    rangeRotateValue.innerHTML = rangeRotate.value;

    n = rangeN.value;
    d = rangeD.value;
    maurer = rangeMaurer.value;
  	size = rangeSize.value;
  	rotate = rangeRotate.value;
  	gg = rangeGG.value;
    k = n / d;
    draw(n, d, maurer, k, size, rotate, gg);
  });
});

elementsArray.forEach((element)=>{
  element.addEventListener('touchmove', () => {
    rangeNValue.innerHTML = rangeN.value;
    rangeDValue.innerHTML = rangeD.value;
    rangeMaurerValue.innerHTML = rangeMaurer.value;
    rangeGGValue.innerHTML = rangeGG.value;
    rangeSizeValue.innerHTML = rangeSize.value;
    rangeRotateValue.innerHTML = rangeRotate.value;

    n = rangeN.value;
    d = rangeD.value;
    maurer = rangeMaurer.value;
  	size = rangeSize.value;
  	rotate = rangeRotate.value;
  	gg = rangeGG.value;
    k = n / d;
    draw(n, d, maurer, k, size, rotate, gg);
  });
});

arrayInputs.forEach((element)=> {
  element.addEventListener('keyup', () => {
    rangeNValue.innerHTML = rangeN.value = inputN.value;
    rangeDValue.innerHTML = rangeD.value = inputD.value;
    rangeMaurerValue.innerHTML = rangeMaurer.value = inputMaurer.value;
	  rangeGGValue.innerHTML = rangeGG.value = inputGG.value;
    rangeSizeValue.innerHTML = rangeSize.value = inputSize.value;
    rangeRotateValue.innerHTML = rangeRotate.value = inputRotate.value;
  })
})

arrayCheck.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    n = rangeN.value;
    d = rangeD.value;
    rotate = rangeRotate.value;
    maurer = rangeMaurer.value;
    gg = rangeGG.value;
    k = n / d;
    draw(n, d, maurer, k, rotate,gg);
  })
})

const button = document.getElementById('generate');
button.addEventListener('click', () => {
  n = inputN.value;
  d = inputD.value;
  maurer = inputMaurer.value;
  rotate = inputRotate.value;
  gg = inputGG.value;
  size = inputSize.value;
  k = n / d;
  draw(n, d, maurer, k,size,rotate,gg);
})
