import Bear from "../bear.js";
import Item from "../item.js";

let _bear = new Bear("Angry Bear", 100, 1, 30, 50);
let stick = new Item("Stick!", 1, "Rawr!");
let mace = new Item("Mace!", 30, "Ouch!");
let taser = new Item("Taser!", 30, "Ouch-Rawr!");


let _items = {
  stick, /**stick: {name: "Stick!", modifier: 1, description: "Rawr!"} */
  mace,
  taser
}

function addMods() {
  let modifyTotal = 0
  for (let i = 0; i < _bear.items.length; i++) {
    let item = _bear.items[i]
    modifyTotal += item.modifier
  }
  return modifyTotal
}

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

  addItemToBear(itemName) {
    let bearItem = _items[itemName]
    _bear.items.push(bearItem)
  }

  attackBear(attackName) {
    let attackDamage = _bear.attacks[attackName] + addMods()
    _bear.health -= attackDamage
    console.log(_bear.health)
    _bear.hits++
  }

}