const canvas = document.getElementById('rose');
const cx = canvas.getContext('2d');

// INPUTS

const inputN = document.getElementById('n');
const inputD = document.getElementById('d');
const inputMaurer = document.getElementById('maurer');
const inputSize = document.getElementById('size');
const inputRotate = document.getElementById('rotate');
const inputGG= document.getElementById('gg');

const arrayInputs = [inputN, inputD, inputMaurer, inputSize, inputRotate, inputGG];

// CHECKBOXES

const checkRose = document.getElementById('showRose');
const checkMaurer = document.getElementById('showMaurer');

const arrayCheck = [checkRose, checkMaurer];

// SLIDERS

const rangeN = document.getElementById('rangeN');
const rangeD = document.getElementById('rangeD');
const rangeMaurer = document.getElementById('rangeMaurer');
const rangeRotate = document.getElementById('rangeRotate');
const rangeGG = document.getElementById('rangeGG');
const rangeSize = document.getElementById('rangeSize');

let elementsArray = [rangeN, rangeD, rangeMaurer, rangeRotate, rangeGG, rangeSize]

// VALUE OUTPUT

const rangeNValue = document.getElementById('rangeNValue');
const rangeDValue = document.getElementById('rangeDValue');
const rangeMaurerValue = document.getElementById('rangeMaurerValue');
const rangeRotateValue = document.getElementById('rangeRotateValue');
const rangeGGValue = document.getElementById('rangeGGValue');
const rangeSizeValue = document.getElementById('rangeSizeValue');

// INITIAL OUTPUT SETUP

rangeNValue.innerHTML = rangeN.value;
rangeDValue.innerHTML = rangeD.value;
rangeMaurerValue.innerHTML = rangeMaurer.value;
rangeRotateValue.innerHTML = rangeRotate.value;
rangeGGValue.innerHTML = rangeGG.value;
rangeSizeValue.innerHTML = rangeSize.value;

// EVENT HANDLERS

function addListenerMulti(element, listeners, fn) {
  listeners.split(' ').forEach(event => element.addEventListener(event, fn, false));
}

elementsArray.forEach(element => {
  addListenerMulti(element, 'mousemove touchmove', () => {
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
    n = inputN.value;
    d = inputD.value;
    maurer = inputMaurer.value;
    rotate = inputRotate.value;
    gg = inputGG.value;
    size = inputSize.value;
    k = n / d;
    draw(n, d, maurer, k,size,rotate,gg);
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
