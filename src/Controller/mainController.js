import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

import { NumbersParserHandler } from '../Model/numbersParser.js';
import { addNumbers } from '../Utils/calculatorToAdd.js';
import { ValidationHandler } from '../Validation/validateStringToAdd.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  async startProgram() {
    const stringToAdd = await this.input.getStringToAddInput();
    new ValidationHandler().checkValidation(stringToAdd);

    const parsedNumbers = new NumbersParserHandler().validation(stringToAdd);
    const resultAddedNumbers = addNumbers(parsedNumbers);

    this.output.printResultOfSum(resultAddedNumbers);
  }
}
