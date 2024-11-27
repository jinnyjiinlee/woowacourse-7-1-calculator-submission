import { InputHandler } from '../View/inputView.js';
// 나중에 사용하기
// import { OutputHandler } from '../View/outputView.js';

import { checkNormalOrCustom } from '../Utils/numbersParser.js';
import { addNumbers } from '../Utils/calculatorToAdd.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    // this.output = new OutputHandler();
  }

  async startProgram() {
    const stringToAdd = await this.input.getStringToAddInput();
    const parsedNumbers = checkNormalOrCustom(stringToAdd);
    const resultAddedNumbers = addNumbers(parsedNumbers);
    console.log('resultAddedNumbers: ', resultAddedNumbers);

    // // \n 기준으로 구분하자
    // this.output.printRateOfReturn(rateOfReturn);
  }
}
