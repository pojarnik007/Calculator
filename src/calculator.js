import { add, subtract, multiply, divide } from './operations.js';
import { state } from './state.js';

const OPERATIONS = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

export function inputNumber(num) {
  state.currentInput += num;
}

export function inputOperator(op) {
  if (state.currentInput === '') return;
  if (state.previousInput !== '') {
    calculate();
  }
  state.operator = op;
  state.previousInput = state.currentInput;
  state.currentInput = '';
}

export function calculate() {
  if (!state.operator || state.currentInput === '' || state.previousInput === '') return;
  const a = parseFloat(state.previousInput);
  const b = parseFloat(state.currentInput);
  const func = OPERATIONS[state.operator];
  state.currentInput = func(a, b).toString();
  state.previousInput = '';
  state.operator = null;
}

export function clear() {
  state.currentInput = '';
  state.previousInput = '';
  state.operator = null;
}
