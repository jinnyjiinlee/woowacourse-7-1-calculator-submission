// 나중에 사용하기
import { InputHandler } from '../View/inputView.js';
// import { OutputHandler } from '../View/outputView.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    // this.output = new OutputHandler();
  }

  async startProgram() {
    const stringToAdd = await this.input.getStringToAddInput();
    console.log('stringToAdd: ', stringToAdd);

    // this.output.printRateOfReturn(rateOfReturn);
  }
}
