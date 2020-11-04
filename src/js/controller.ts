//@ts-check

import '../css/main.scss';
import model from './Calculator';
import view from './views/calculatorView';

const calculatorController = function () {
  view.render();
};

/**
 * @param {number} operand
 * @param {string} operator
 * @returns {void}
 */
const clickController = function (operand: number, operator: string): void {
  const out = model.calculate(operand, operator);
  console.log(out);
  
  view.updateDisplay(model.getResult().toString());
};

const init = function ():void {
  view.addHandlerRender(calculatorController);
  view.addHandlerEvents(clickController);
};
init();
