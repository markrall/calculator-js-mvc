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

  getResult(): number {
    return this.state.result;
  }

  calculate(operand: number, operator: string): number {
    console.log(operator);
    
    if (operator === 'clear') {
      this.clear();
    } else if (operator === 'equals') {
      this.[this.state.operator](operand);
      return this.state.result;
    } else {
      if (this.state.operand === null) {
        this.state.operand = operand;
        this.state.result = operand;
        this.state.operator = operator;
        return this.state.result;
      }

      this.[this.state.operator](operand);

      this.state.operand = operand; 
      this.state.operator = operator;
    }
    
    return this.state.result;
  }

  // Add two operands
  add = (operand: number): void => {
    this.state.result = this.state.result + operand;
  };

  // Subtract two operands
  subtract = (operand: number): void => {
    this.state.result = this.state.result - operand;
  };

  // Multiply two operands
  multiply = (operand: number): void => {
    this.state.result = this.state.result * operand;
  };

  // Divide two operands
  divide = (operand: number): void => {
    this.state.result = this.state.result / operand;
  };

  // Clear all input and history
  clear = (): void => {
    this.state = {
      operator: '',
      operand: null,
      result: 0,
    };
  };
}

export default new Calculator();