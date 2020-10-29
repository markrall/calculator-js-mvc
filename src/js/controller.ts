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
const clickController = function (operand: number, operator: string) {
  if (isDevelopment) console.log(`before click: result = ${model.getResult()}, operand = ${model.getOperand()}, operator = ${model.getOperator()}`);
  
  model.calculate(operand, operator);
  view.updateDisplay(model.getResult().toString());

  if (isDevelopment) console.log(`after click: result = ${model.getResult()}, operand = ${model.getOperand()}, operator = ${model.getOperator()}`);
};

const init = function () {
  view.addHandlerRender(calculatorController);
  if (isDevelopment) console.log(`init: result = ${model.getResult()}, operand = ${model.getOperand()}, operator = ${model.getOperator()}`);
  view.addHandlerClick(clickController);
};
init();
