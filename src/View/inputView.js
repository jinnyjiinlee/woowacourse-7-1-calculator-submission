import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constant/messages.js';

export class InputHandler {
  async getStringToAddInput() {
    return await Console.readLineAsync(INPUT_MESSAGES.STRING_TO_ADD);
  }
}
