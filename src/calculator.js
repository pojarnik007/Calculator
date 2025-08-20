import { displayEl } from './dom.js';
import { add, subtract, multiply, divide, sqrt } from './operations.js'
import { state } from './state.js'

const OPERATIONS = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
}

export function inputNumber(num) {
  if (num == '0' & state.currentInput == '') return;
  if (state.currentInput.length > 15) {
    displayEl.style.fontSize =1.6 - (state.currentInput.length-18)/25 + 'em';
  } else {
    displayEl.style.fontSize = '2em';
  }
  if (state.currentInput.length > 30) return;
  if (num == '.' & state.currentInput.includes('.')){
    return;
  } else if (num == '.' & state.currentInput=='') {
  state.currentInput = '0';
  } 
  state.currentInput += num
}

export function inputOperator(op) {
  if (state.currentInput === '') return;
  if (state.previousInput !== '') {
    calculate()
  }
  state.operator = op
  if (state.currentInput.at(length-1) == '.'){
    state.previousInput = state.currentInput.slice(0,-1)
  } else {
    state.previousInput = state.currentInput
  }
  state.currentInput = ''
}

export function mySqrt() {
  if(state.currentInput=='') return;
  state.currentInput = sqrt(state.currentInput).toString();
  if (state.currentInput === '0') state.currentInput = '';
}

export function exponentiation(){
  if (state.currentInput === '') return;
  state.currentInput = ( parseFloat(state.currentInput) * parseFloat(state.currentInput) ).toString();
}

export function oneDivX() {
  if(parseFloat(state.currentInput) === 0) return;
  if(state.currentInput === '') return;
   state.currentInput = ( 1/parseFloat(state.currentInput) ).toString();
}

export function percents() {
  if (state.currentInput === '') return;
  if(state.previousInput) {
      state.currentInput =( parseFloat(state.currentInput) * parseFloat(state.previousInput)).toString();
  }
  state.currentInput =( parseFloat(state.currentInput) * 0.01 ).toString();
}

export function del() {
  state.currentInput = state.currentInput.slice(0,-1);
  if (state.currentInput === '-') state.currentInput = '';
}

export function changeSign(){

  if (state.currentInput==0) return;

  state.currentInput = (parseFloat(state.currentInput) * (-1)).toString();
}

export function calculate() {
  if (
    !state.operator ||
    state.currentInput === '' ||
    state.previousInput === ''
  )
    return
  const a = parseFloat(state.previousInput)
  const b = parseFloat(state.currentInput)
  const func = OPERATIONS[state.operator]
  state.currentInput = func(a, b).toString()
  state.previousInput = ''
  state.operator = null
}

export function clear() {
  state.currentInput = ''
  state.previousInput = ''
  state.operator = null
}
