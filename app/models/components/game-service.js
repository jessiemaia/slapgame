import Bear from "../bear.js";
import Item from "../item.js";

let _bear = new Bear("Angry Bear", 100, 1, 30, 50);
let stick = new Item("Stick!", 1, "Rawr!");

let _items = [stick]

export default class GameService {

  get Bear() {
    return {
      name: _bear.name,
      health: _bear.health,
      attacks: _bear.attacks,
      items: _bear.items,
      hits: _bear.hits,
    }
  }

  addItemToBear(itemIndex) {
    let bearItem = _items[itemIndex]
    _bear.items.push(bearItem)
  }

  attackBear(attackName) {
    let attackDamage = _bear.attacks[attackName]
    _bear.health -= attackDamage
    console.log(_bear.health)
    _bear.hits++
  }
}