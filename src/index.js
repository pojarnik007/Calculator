import './style.css';
import { renderButtons } from './ui.js';
import { displayEl, buttonsEl } from './dom.js';
import { inputNumber, inputOperator, calculate, clear } from './calculator.js';
import { state } from './state.js';

const calculatorEl = document.getElementById('calculator');
const buttons = document.querySelectorAll('.buttons button');
const calculator = document.querySelector('.calculator');
const menu = document.querySelector('.theme-btn');

renderButtons();

buttonsEl.addEventListener('click', e => {
  const btn = e.target;
  if (btn.tagName !== 'BUTTON') return;

  const value = btn.textContent;

  if (!isNaN(value) || value === '.') {
    inputNumber(value);
  } else if ('/*-+'.includes(value)) {
    inputOperator(value);
  } else if (value === '=') {
    calculate();
  } else if (value === 'C') {
    clear();
  }

  displayEl.textContent = state.currentInput || '0';
});


const themeBtn = document.querySelector('.theme-btn');
const themeMenu = document.getElementById('themeMenu');

themeBtn.addEventListener('click', () => {
  themeMenu.classList.toggle('open');
});

themeMenu.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    calculator.setAttribute('data-theme', theme);
    menu.setAttribute('data-theme', theme);
  });
});