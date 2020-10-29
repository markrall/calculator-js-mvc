//@ts-check

import { CalculatorState } from "../../@types/types";

/**
 * @class Model
 *
 * Manages application data
*/
class Calculator {
  state: CalculatorState;

  constructor() {
    this.state = {
      operator: '',
      operand: null,
      result: 0,
    };
  }

  getResult() {
    return this.state.result;
  }

  calculate(operand: number, operator: string) {
    if (operator === 'clear') {
      this.clear();
    } else if (operator === 'equals') {
      this.equals();
    } else {
      if (this.state.operand === null) {
        this.state.operand = operand;
        this.state.result = operand;
        this.state.operator = operator;
        return;
      }

      if (this.state.operator === 'add') this.add(operand);
      if (this.state.operator === 'subtract') this.subtract(operand);
      if (this.state.operator === 'multiply') this.multiply(operand);
      if (this.state.operator === 'divide') this.divide(operand);
      
      if (isDevelopment) console.log({
        thisResult: this.state.result,
        thisOperand: this.state.operand,
        thisOperator: this.state.operator,
        operand,
        operator,
      });

      this.state.operand = operand; 
      this.state.operator = operator;
    }
    
    return this.state.result;
  }

  // Add two operands
  add = (operand: number) => {
    this.state.result = this.state.result + operand;
  };

  // Subtract two operands
  subtract = (operand: number) => {
    this.state.result = this.state.result - operand;
  };

  // Multiply two operands
  multiply = (operand: number) => {
    this.state.result = this.state.result * operand;
  };

  // Divide two operands
  divide = (operand: number) => {
    this.state.result = this.state.result / operand;
  };

  equals= () => {
    
  };

  // Clear all input and history
  clear = () => {
    this.state = {
      operator: '',
      operand: null,
      result: 0,
    };
  };
}

export default new Calculator();