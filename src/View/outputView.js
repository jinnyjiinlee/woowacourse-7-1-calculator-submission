import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../Constant/messages.js';

export class OutputHandler {
  async printResultOfSum(resultAddedNumbers) {
    const { RESULT } = OUTPUT_MESSAGES;
    
    return Console.print(`${RESULT} : ${resultAddedNumbers}`);
  }
}
