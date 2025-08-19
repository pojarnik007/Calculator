import { HistoryDisplay } from "./dom"

export function add(a, b) {
  return a + b
}
export function subtract(a, b) {
  return a - b
}
export function multiply(a, b) {
  return a * b
}
export function divide(a, b) {
  return b === 0 ? 'Error' : a / b
}

export function sqrt(a) {
  let precision = 0.0000001
  let n = parseFloat(a);
  if (n < 0) {
    HistoryDisplay.textContent = "NaN";
    return 0;
  }
  if (n === 0) {
    return 0;
  }

  let guess = n / 2;
  let nextGuess;
  let f;

  while (true) {
    nextGuess = (guess + n / guess) / 2;
    f = (nextGuess - guess);
    if(f<0) f*=-1;
    if (f < precision) {
      return nextGuess;
    }
    guess = nextGuess;
  }
}