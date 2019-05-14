import GameService from './game-service.js'

let _gameService = new GameService()

function draw() {
  let bear = _gameService.Bear
  let template = `
  <div class="col-6">
    <h3>Bear: <span id="name">${bear.name}</span></h3>
    <h3>Health: <span id="health">${bear.health}</h3>
    <h3>Hits: <span id="hits">${bear.hits}</span></h3>
    </div>
    `
  document.getElementById("health").innerText = bear.health.toString()
  document.getElementById("hits").innerText = bear.hits.toString()

}

function reset() {
  let reset = 0
  let template = `
  
  `
}

export default class GameController {
  constructor() {
    draw();
  }

  addItemToBear(itemIndex) {
    _gameService.addItemToBear(itemIndex)
  }

  attackBear(attackName) {
    _gameService.attackBear(attackName)
    draw();
  }
}