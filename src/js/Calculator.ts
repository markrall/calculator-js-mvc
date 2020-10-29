//@ts-check
/** @typedef { import('./types.d').CalculatorState } CalculatorState */

import * as types from "./types";

/**
 * @class Model
 *
 * Manages application data
*/
class Calculator {
  state: types.CalculatorState;

  constructor() {
    this.state = {
      operator: null,
      operand: 0,
      result: 0,
    };
  }

  getResult() {
    return this.state.result;
  }

  getOperator() {
    return this.state.operator;
  }

  getOperand() {
    return this.state.operand;
  }

  calculate(operand: number, operator: string) {
    const operations = {
      add: this.add,
      subtract: this.subtract,
      multiply: this.multiply,
      divide: this.divide,
      equals: this.equals,
      clear: this.clear,
    };
    
    
    if (this.state.operator === null) this.state.operator = operator;
    
    if (operator === 'clear') {
      operations[operator]();
    } else if (operator === 'equals') {
      operations[this.state.operator]();
    } else {
      this.state.operand = operand;
      if (this.state.result === 0) this.state.result = this.state.operand;
      
      operations[this.state.operator]();
      
      this.state.operator = operator;
    }
    

    // return result
    return this.state.result;
  }

  // Add two operands
  add = () => {
    console.group('add');
    console.log('current result: ', this.state.result);
    console.log('operand: ', this.state.operand);
    console.log('new result: ', this.state.result + this.state.operand);
    console.groupEnd();
    
    this.state.result += this.state.operand;
  };

  // Subtract two operands
  subtract = () => {
    this.state.result -= this.state.operand;
  };

  // Multiply two operands
  multiply = () => {
    console.group('multiply');
    console.log(this.state.result);
    console.log(this.state.operand);
    console.log(this.state.result * this.state.operand);
    console.groupEnd();
    
    this.state.result *= this.state.operand;
  };

  // Divide two operands
  divide = () => {
    this.state.result /= this.state.operand;
  };

  equals= () => {
    
    console.log(this.state.result);
  };

  // Clear all input and history
  clear = () => {
    this.state = {
      operator: null,
      operand: 0,
      result: 0,
    };
  };
}

export default new Calculator();