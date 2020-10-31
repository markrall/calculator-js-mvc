"use strict";
//@ts-check
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../css/main.scss");
const Calculator_1 = __importDefault(require("./Calculator"));
const calculatorView_1 = __importDefault(require("./views/calculatorView"));
const calculatorController = function () {
    calculatorView_1.default.render();
};
/**
 * @param {number} operand
 * @param {string} operator
 * @returns {void}
 */
const clickController = function (operand, operator) {
    Calculator_1.default.calculate(operand, operator);
    if (isDevelopment)
        console.log('Controller:clickController:model.getResult: ', Calculator_1.default.getResult());
    calculatorView_1.default.updateDisplay(Calculator_1.default.getResult().toString());
};
const init = function () {
    calculatorView_1.default.addHandlerRender(calculatorController);
    calculatorView_1.default.addHandlerClick(clickController);
};
init();
