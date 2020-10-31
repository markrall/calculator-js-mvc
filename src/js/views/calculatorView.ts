//@ts-check

// TODO: add key event listners eg. [0-9+-*/=], esc, return

class CalculatorView {
  #parentElement: HTMLElement;
  input: string;
  operand: number;
  operator: string;
  display: HTMLElement;
  resetInput: boolean;
  defaultDisplayFontSize: number;
  
  constructor() {
    this.#parentElement = <HTMLElement>document.getElementById('root');
    this.operator = '';
    this.input = '0';
    this.operand = 0;
    this.display = null!;
    this.resetInput = false;
    this.defaultDisplayFontSize = 0;
  }

  updateDisplay(output: string): void {
    if (output.length > 9) this.display.style.fontSize = this.defaultDisplayFontSize / 2 + "px";
    if (output.length > 19) this.display.style.fontSize = this.defaultDisplayFontSize / 3 + "px";
    if (output.length > 28) this.display.style.fontSize = this.defaultDisplayFontSize / 6 + "px";
    if (output.length <= 9) this.display.style.fontSize = this.defaultDisplayFontSize + "px";
    this.display.innerText = output;
  }
  
  clickEventHandler(element: HTMLElement, handler: Function): void {
    // define major key types to determine logical steps
    const keyType = {
      operandKey: 'key-type-operand',     // capture operand inputs eg. [0-9.±]
      operatorKey: 'key-type-operator',   // calc operand against current result using specified operator
      functionKey: 'key-type-function',   // calc percentage, square etc against current result
    };

    const keyValue = element.dataset.key || '';

    // Capture operand inputs and update diaplay
    if (element.classList.contains(keyType.operandKey)) {
      if (this.resetInput) {
        this.input = '';
        this.resetInput = false;
      }

      if (keyValue === '.') {
        if (this.input.includes(keyValue)) return;
        if (this.input === '') { this.input = '0.'; } else { this.input += keyValue; }
      } else if (this.input === '0') { 
        this.input = keyValue; 
      } else {
        this.input += keyValue;
      }
      
      this.updateDisplay(this.input);
    }

    if (element.classList.contains(keyType.operatorKey)) {
      this.operand = parseFloat(this.display.innerText);
      handler(this.operand, keyValue);
      this.resetInput = true;
    }
    
    if (element.classList.contains(keyType.functionKey)) {
      
      if (keyValue === 'clear') {
        this.operand = 0;
        this.input = '0';
        this.operator = '';
        this.resetInput = false;
        this.updateDisplay(this.input);
        handler(0, keyValue);
      }
      if (keyValue === 'plusminus') {
        this.operand = parseFloat(this.display.innerText) * -1;
        this.updateDisplay(this.operand.toString());
      }
      if (keyValue === 'percentage') {
        this.operand = parseFloat(this.display.innerText) / 100;
        this.updateDisplay(this.operand.toString());
      }
    }
  }

  addHandlerClick(handler: Function): void {
    
    this.#parentElement.addEventListener('click', e => {
      const element = <HTMLElement>e.target;

      // Ignore click events on non-key elements
      if (!element.classList.contains('calc__key')) return;

      // Based on input decide the next step in the calulation
      this.clickEventHandler(element, handler);
    });

    // how to track modifier key events https://www.gavsblog.com/blog/detect-single-and-multiple-keypress-events-javascript
    let keysPressed: {[index: string]:any} = {};
    
    document.addEventListener('keydown', (e) => {
      if (e.altKey) console.log('WIN!!!');
      
      // if (!e.key.match(/[0-9-+/*=%\.]|Enter|Escape|Alt/gi)) return;
      keysPressed[e.key] = true;
      
      if (keysPressed['Alt'] && e.key === '-') {
          console.log(e.key);
      }
    });

    document.addEventListener('keyup', (e) => {
      delete keysPressed[e.key];
    });
  }
  
  addHandlerRender(handler: { (): void; (this: Window, ev: Event): any; }): void {
    window.addEventListener('load', handler);
  }

  render(): void {
    this.#parentElement.innerHTML = this.generateMarkup();
    this.display = <HTMLElement>document.querySelector('.calc__display');
    this.defaultDisplayFontSize = parseFloat(window.getComputedStyle(this.display, null).getPropertyValue('font-size'));
    this.updateDisplay(this.input);
  }

  private generateMarkup() {
    return `
      <div class="calc">
        <div class="calc__display"></div>
        <div class="calc__keypad">
          <div class="keypad__row">
            <span class="calc__key calc__key--function key-type-function" data-key="clear">CE</span>
            <span class="calc__key calc__key--function key-type-function" data-key="plusminus">&#177;</span>
            <span class="calc__key calc__key--function key-type-function" data-key="percentage">%</span>
            <span class="calc__key calc__key--operator key-type-operator" data-key="divide">/</span>
            </div>
            <div class="keypad__row">
            <span class="calc__key calc__key--operand key-type-operand" data-key="7">7</span>
            <span class="calc__key calc__key--operand key-type-operand" data-key="8">8</span>
            <span class="calc__key calc__key--operand key-type-operand" data-key="9">9</span>
            <span class="calc__key calc__key--operator key-type-operator" data-key="multiply">x</span>
            </div>
            <div class="keypad__row">
            <span class="calc__key calc__key--operand key-type-operand" data-key="4">4</span>
            <span class="calc__key calc__key--operand key-type-operand" data-key="5">5</span>
            <span class="calc__key calc__key--operand key-type-operand" data-key="6">6</span>
            <span class="calc__key calc__key--operator key-type-operator" data-key="subtract">-</span>
            </div>
            <div class="keypad__row">
            <span class="calc__key calc__key--operand key-type-operand" data-key="1">1</span>
            <span class="calc__key calc__key--operand key-type-operand" data-key="2">2</span>
            <span class="calc__key calc__key--operand key-type-operand" data-key="3">3</span>
            <span class="calc__key calc__key--operator key-type-operator" data-key="add">+</span>
          </div>
          <div class="keypad__row">
            <span class="calc__key calc__key--operand key-type-operand calc__key--wide" data-key="0">0</span>
            <span class="calc__key calc__key--operand key-type-operand" data-key=".">.</span>
            <span class="calc__key calc__key--operator key-type-operator" data-key="equals">=</span>
          </div>
        </div>
      </div>
    `;
   }
};

export default new CalculatorView();
