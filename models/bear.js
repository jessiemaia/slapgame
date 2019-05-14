export default class Bear {
  constructor(name, health, poke, slap, kick) {
    this.name = name
    this.health = health
    this.attacks = {
      "poke": poke
      "slap": slap
      "kick"; kick
    }
    this.items = []
    this.hits = 0
  }
}