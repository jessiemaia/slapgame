import GameService from './game-service.js'

let _gameService = new GameService()

function draw() {
  let bear = _gameService.Bear
  let template = `
  <div class="card">
    <h2>${bear.name}</h2>
    <h4>Health: ${bear.health}</h4>
    </div>
    `
}

export default class GameController {
  constructor() { }

  addItemToTarget(itemIndex) {
    _gameService.addItemToBear(itemIndex)
  }

  attackTarget(attackName) {
    _gameService.attackBear(attackName)
  }
}