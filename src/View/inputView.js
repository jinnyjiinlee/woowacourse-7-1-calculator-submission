import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constant/messages.js';

// TODO: 공부 - return 뒤에 await 없어도 실행 가능한 이유
export class InputHandler {
  async getStringToAddInput() {
    return Console.readLineAsync(INPUT_MESSAGES.STRING_TO_ADD);
  }
}
