import { DELIMITER, DELIMITER_MAKER } from '../Constant/constant.js';

export class NumbersParserHandler {
  parseNumbers(inputString) {
    this.inputString = inputString;
    this.specifyCaseValue();

    if (this.NORMAL_CASE_CHECK) {
      return this.parseNumbersForNormal();
    }

    if (this.CUSTOM_CASE_CHECK) {
      return this.parseNumbersForCustom();
    }
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

  // TODO: 리펙토링: 정규식 표현에도 상수화 처리하여 콤마, 클론 넣기
  parseNumbersForNormal() {
    if (
      this.inputString[1] === DELIMITER.COMMA ||
      this.inputString[1] === DELIMITER.COLON
    ) {
      return this.inputString
        .split(/,|:/)
        .map((number) => number.trim())
        .map(Number);
    }
  }

  parseNumbersForCustom() {
    const onlyNumbersAndDelimiter = this.inputString.substr(5);
    const customDelimiter = this.inputString[2];

    return onlyNumbersAndDelimiter
      .split(customDelimiter)
      .map((number) => number.trim())
      .map(Number);
  }
}
