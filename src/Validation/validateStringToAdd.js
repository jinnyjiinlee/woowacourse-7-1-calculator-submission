import { DELIMITER, DELIMITER_MAKER } from '../Constant/constant.js';
import { ERROR_MESSAGES } from '../Constant/errorMessages.js';

export class ValidationHandler {
  checkValidation(inputString) {
    this.inputString = [...inputString];

    this.specifyCaseValue();
    this.checkBasicError();
    this.checkNormalOrCustom();
  }

  specifyCaseValue() {
    this.NORMAL_CASE_CHECK =
      this.inputString[1] === DELIMITER.COMMA ||
      this.inputString[1] === DELIMITER.COLON;

    this.CUSTOM_CASE_CHECK =
      this.inputString[0] === DELIMITER_MAKER.STRING_FIRST &&
      this.inputString[1] === DELIMITER_MAKER.STRING_SECOND &&
      this.inputString[3] === DELIMITER_MAKER.STRING_THIRD &&
      this.inputString[4] === DELIMITER_MAKER.STRING_FOURTH;
  }

  checkBasicError() {
    if (!(this.NORMAL_CASE_CHECK || this.CUSTOM_CASE_CHECK)) {
      throw new Error(ERROR_MESSAGES.WRONG_INPUT);
    }
  }

  checkNormalOrCustom = () => {
    if (this.NORMAL_CASE_CHECK) {
      this.validateNormalCase();
    }

    if (this.CUSTOM_CASE_CHECK) {
      this.validateCustomCase();
    }
  };

  // TODO: 리펙토링 - forEach를 사용해서 짝수 인덱스만 돌게하는 것 찾기
  validateNormalCase() {
    const onlyNumberInArray = [];
    for (let i = 0; i < this.inputString.length; i += 2) {
      onlyNumberInArray.push(this.inputString[i]);
    }

    onlyNumberInArray.forEach((number) => {
      if (Number.isNaN(Number(number))) {
        throw new Error(ERROR_MESSAGES.WRONG_NORMAL_INPUT);
      }
    });
  }

  validateCustomCase() {
    const onlyNumberInArray = [];
    for (let i = 5; i < this.inputString.length; i += 2) {
      onlyNumberInArray.push(this.inputString[i]);
    }

    onlyNumberInArray.forEach((number) => {
      if (Number.isNaN(Number(number))) {
        throw new Error(ERROR_MESSAGES.WRONG_CUSTOM_INPUT);
      }
    });
  }
}
