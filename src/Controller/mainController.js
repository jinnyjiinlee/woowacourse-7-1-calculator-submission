import { InputHandler } from '../View/inputView.js';
// 나중에 사용하기
// import { OutputHandler } from '../View/outputView.js';

import { parseNumbers } from '../Utils/numbersParser.js';
import { addNumbers } from '../Utils/calculatorToAdd.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    // this.output = new OutputHandler();
  }

  async startProgram() {
    const stringToAdd = await this.input.getStringToAddInput();
    console.log('stringToAdd: ', stringToAdd);

    const parsedNumbers = parseNumbers(stringToAdd);
    console.log('parsedNumbers: ', parsedNumbers);

    const resultAddedNumbers = addNumbers(parsedNumbers);
    console.log('resultAddedNumbers: ', resultAddedNumbers);


    // this.output.printRateOfReturn(rateOfReturn);
  }
}
