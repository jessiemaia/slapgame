import GameController from "./models/components/game-controller.js";


class App {
  constructor() {
    this.controllers = {
      gameController: new GameController()
    }
  }
}

window['app'] = new App()

//var app = {
// controllers: {
//     gameController: {}
//   }
// }

