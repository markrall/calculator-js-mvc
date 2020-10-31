"use strict";
//@ts-check
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Model
 *
 * Manages application data
*/
class Calculator {
    constructor() {
        // Add two operands
        this.add = (operand) => {
            this.state.result = this.state.result + operand;
        };
        // Subtract two operands
        this.subtract = (operand) => {
            this.state.result = this.state.result - operand;
        };
        // Multiply two operands
        this.multiply = (operand) => {
            this.state.result = this.state.result * operand;
        };
        // Divide two operands
        this.divide = (operand) => {
            this.state.result = this.state.result / operand;
        };
        // Clear all input and history
        this.clear = () => {
            this.state = {
                operator: '',
                operand: null,
                result: 0,
            };
        };
        this.state = {
            operator: '',
            operand: null,
            result: 0,
        };
    }
    getResult() {
        return this.state.result;
    }
    calculate(operand, operator) {
        if (operator === 'clear') {
            this.clear();
        }
        else if (operator === 'equals') {
            if (isDevelopment)
                console.log(this.state.operand, this.state.operator, operand);
            if (this.state.operator === 'add')
                this.add(operand);
            if (this.state.operator === 'subtract')
                this.subtract(operand);
            if (this.state.operator === 'multiply')
                this.multiply(operand);
            if (this.state.operator === 'divide')
                this.divide(operand);
            return this.state.result;
        }
        else {
            if (this.state.operand === null) {
                this.state.operand = operand;
                this.state.result = operand;
                this.state.operator = operator;
                return this.state.result;
            }
            if (this.state.operator === 'add')
                this.add(operand);
            if (this.state.operator === 'subtract')
                this.subtract(operand);
            if (this.state.operator === 'multiply')
                this.multiply(operand);
            if (this.state.operator === 'divide')
                this.divide(operand);
            if (isDevelopment)
                console.log('Calcultor:calculate: ', {
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
}
exports.default = new Calculator();
