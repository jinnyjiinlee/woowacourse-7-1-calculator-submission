import { Console } from '@woowacourse/mission-utils';

export class OutputHandler {
  async printResultOfSum(resultAddedNumbers) {
    return Console.print(`결과 : ${resultAddedNumbers}`);
  }
}
