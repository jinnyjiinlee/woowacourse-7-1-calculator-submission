import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constant/messages.js';

export class InputHandler {
  async getStringToAddInput() {
    // TODO: 공부 - return 뒤에 await 없어도 실행 가능한 이유
    return Console.readLineAsync(INPUT_MESSAGES.STRING_TO_ADD);
  }
}
