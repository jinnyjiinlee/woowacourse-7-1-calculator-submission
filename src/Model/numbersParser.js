export class NumbersParserHandler {
  validation(inputString) {
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
      this.inputString[1] === ',' || this.inputString[1] === ':';
    this.CUSTOM_CASE_CHECK =
      this.inputString[0] === '/' &&
      this.inputString[1] === '/' &&
      this.inputString[3] === '\\' &&
      this.inputString[4] === 'n';
  }

  parseNumbersForNormal() {
    if (this.inputString[1] === ',' || this.inputString[1] === ':') {
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
