import { ERROR_MESSAGES } from '../Constant/errorMessages.js';

export class ValidationHandler {
  checkValidation(Numbers) {
    this.Numbers = [...Numbers];

    this.specifyCaseValue();
    this.checkBasicError();
    this.checkNormalOrCustom();
  }

  specifyCaseValue() {
    this.normalCase = this.Numbers[1] === ',' || this.Numbers[1] === ':';
    this.customCase =
      this.Numbers[0] === '/' &&
      this.Numbers[1] === '/' &&
      this.Numbers[3] === '\\' &&
      this.Numbers[4] === 'n';
  }

  checkBasicError() {
    if (!(this.normalCase || this.customCase)) {
      throw new Error(ERROR_MESSAGES.WRONG_INPUT);
    }
  }

  checkNormalOrCustom = () => {
    if (this.normalCase) {
      this.validateNormalCase();
    }

    if (this.customCase) {
      this.validateCustomCase();
    }
  };

  validateNormalCase() {
    const evenNumberArray = [];
    for (let i = 0; i < this.Numbers.length; i += 2) {
      evenNumberArray.push(this.Numbers[i]);
    }
    evenNumberArray.forEach((number) => {
      if (isNaN(Number(number))) {
        throw new Error(ERROR_MESSAGES.WRONG_NORMAL_INPUT);
      }
    });
  }

  validateCustomCase() {
    const evenNumberArray = [];
    for (let i = 5; i < this.Numbers.length; i += 2) {
      evenNumberArray.push(this.Numbers[i]);
    }

    evenNumberArray.forEach((number) => {
      if (Number.isNaN(Number(number))) {
        throw new Error(ERROR_MESSAGES.WRONG_CUSTOM_INPUT);
      }
    });
  }
}
