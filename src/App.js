import { MainController } from './Controller/mainController.js';

class App {
  async run() {
    const controller = new MainController();
    await controller.startProgram();
  }
}

export default App;
