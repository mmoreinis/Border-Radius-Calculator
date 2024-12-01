const figureEl = document.querySelector('figure');
const inputs = document.querySelectorAll('input');

const radiusInputEl = document.querySelector('[name="radius"]');
const paddingInputEl = document.querySelector('[name="padding"]');

const outerRadiusEl = document.querySelector('.outer-radius');
const innerRadiusEl = document.querySelector('.inner-radius');
const paddingEl = document.querySelector('.padding');

function updateFigure({target}) {
  figureEl.style.setProperty(`--${target.name}`, `${target.value}px`);
    
  outerRadiusEl.textContent = radiusInputEl.value;
  paddingEl.textContent = paddingInputEl.value;
  innerRadiusEl.textContent = radiusInputEl.value - paddingInputEl.value;
}

document.addEventListener('input', updateFigure);
document.addEventListener('change', updateFigure)