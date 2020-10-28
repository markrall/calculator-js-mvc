//@ts-check

/**
 * @class Model
 *
 * Manages application data
*/
class Calculator {
  
  constructor() {
    this.state = {
      operator: null,
      operand: 0,
      result: 0,
    };
  }

  // Fetch the result of the last calculation
  getResult() {
    return this.state.result;
  }

  getOperator() {
    return this.state.operator;
  }

  getOperand() {
    return this.state.operand;
  }

  // Add two operands
  add(num?: number) {
    if (num) this.state.operand = num;
    this.state.result += this.state.operand;
    this.state.operator = '+';
    return this.state.result;
  }

  // Subtract two operands
  subtract(num?: number) {
    this.state.operator = '-';
    if (num) this.state.operand = num;
    return this.state.result -= this.state.operand;
  }

  // Multiply two operands
  multiply(num?: number) {
    this.state.operator = '*';
    if (num) this.state.operand = num;
    return this.state.result *= this.state.operand;
  }

  // Divide two operands
  divide(num?: number) {
    this.state.operator = '/';
    if (num) this.state.operand = num;
    return this.state.result /= this.state.operand;
  }

  equals() {
    console.log('you clicked the equals key');
    
  }

  // Clear the last input
  clearEntry() { 
    this.state.operand = null;
  }

  // Clear all input and history
  clear() {
    this.state.operator = '';
    this.state.operand = 0;
    this.state.result = 0;
  }
}

export default new Calculator();