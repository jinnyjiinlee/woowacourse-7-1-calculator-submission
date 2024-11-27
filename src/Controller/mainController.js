import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

import { checkNormalOrCustom } from '../Utils/numbersParser.js';
import { addNumbers } from '../Utils/calculatorToAdd.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  async startProgram() {
    const stringToAdd = await this.input.getStringToAddInput();
    const parsedNumbers = checkNormalOrCustom(stringToAdd);
    const resultAddedNumbers = addNumbers(parsedNumbers);

    this.output.printResultOfSum(resultAddedNumbers);
  }
}
