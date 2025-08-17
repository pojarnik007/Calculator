import { BUTTONS } from './constants.js';
import { buttonsEl } from './dom.js';

export function renderButtons() {
  BUTTONS.forEach(label => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.classList.add('calc-btn');
    if ('/*-+'.includes(label)) btn.classList.add('operator');
    if (label === '=') btn.classList.add('equal');
    if (label === '0') btn.classList.add('zero');
    buttonsEl.appendChild(btn);
  });
}
