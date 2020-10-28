//@ts-check

import { monitorEventLoopDelay } from 'perf_hooks';
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
  console.log(`before: result = ${model.getResult()}, operand = ${model.getOperand()}, operator = ${model.getOperator()}`);
  
  model[operator](operand);
  view.updateDisplay(model.getResult().toString());

  console.log(`after: result = ${model.getResult()}, operand = ${model.getOperand()}, operator = ${model.getOperator()}`);

};

const init = function () {
  view.addHandlerRender(calculatorController);
  view.addHandlerClick(clickController);
  // model['add'](10.5);
  // model['add'](9.5);
  // console.log(model.getResult());
  // model['subtract'](6);
  // model['subtract'](4);
  // console.log(model.getResult());
  // model['divide'](2);
  // console.log('getResult: ', model.getResult());
  // console.log('getOperand: ', model.getOperand());
  // console.log('getOperator: ', model.getOperator());
  
};
init();
