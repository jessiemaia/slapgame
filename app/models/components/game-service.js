import Bear from "../bear.js";
import Item from "../item.js";

let _bear = new Bear("Angry Bear", 100, 1, 5, 10);
let stick = new Item("Stick!", 1, "Stick!");

let _items = [stick]

get Bear() {
  return {
    name: _target.name,
    health: _target.health,
    attacks: _target.attacks,
    items: _target.items,
    hits: _target.hits,
  }
}

addItemToBear(itemIndex) {
  let targetItem = _items[itemIndex]
  _target.items.push(targetItem)
}

attackBear(attackName) {
  let attackDamage = _target.attacks[attackName]
}
