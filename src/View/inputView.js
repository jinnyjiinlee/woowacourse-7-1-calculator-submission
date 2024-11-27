import { Console } from '@woowacourse/mission-utils';
// import { INPUT_MESSAGES } from '../Constant/messages.js';

export class InputHandler {
  // TODO: 리펙토링-상수처리
  async getStringToAddInput() {
    return await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }
}
