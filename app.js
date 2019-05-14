let bear = {
  name: 'Mr Bear',
  health: 100,
  hits: 0,
  tolerance: 3,
  moodIndex: 0,
  images: ['/assets/happybear2.jpg', '/assets/angrybear2.jpg', '/assets/claws.jpg'],
  items: []
}

let items = {
  stick: { name: 'Stick', modifier: 5 },
  mace: { name: 'Bear Mace', modifier: 20 },
  taser: { name: 'Taser', modifier: 50 },
}

function adMods() {
  let modifyTotal = 0
  for (let i = 0; i < bear.items.length; i++) {
    let item = bear.items[i]
    modifyTotal += item.modifier
  }
  return modifyTotal
}

function poke() {
  bear.health -= 1 - adMods()
  bear.hits++
  update()
}

function slap() {
  bear.health -= 30 + adMods()
  bear.hits++
  update()
}

function kick() {
  bear.health -= 50 + adMods()
  bear.hits++
  update()
}

function update() {
  if (bear.health <= 0) {
    bear.moodIndex = 2;
  }
  else if (bear.health <= 50) {
    bear.moodIndex = 1;
  }
  else {
    bear.moodIndex = 0;
  }
  drawBear()
}

function drawBear() {
  document.getElementById("health").innerText = bear.health.toString()
  document.getElementById("hits").innerText = bear.hits.toString()
  document.getElementById("bear-image").setAttribute("src", bear.images[bear.moodIndex])
  if (bear.moodIndex == bear.images.length - 1) {
    document.getElementById("poke-button").disabled = true;
    document.getElementById("slap-button").disabled = true;
    document.getElementById("kick-button").disabled = true;
    document.getElementById("run-button").disabled = true;
    document.getElementById("mace-button").disabled = true;
    document.getElementById("feed-button").disabled = true;
  } else {
    document.getElementById("poke-button").disabled = false;
    document.getElementById("slap-button").disabled = false;
    document.getElementById("kick-button").disabled = false;
    document.getElementById("run-button").disabled = false;
    document.getElementById("mace-button").disabled = false;
    document.getElementById("feed-button").disabled = false;
  }
}

function stick() {
  bear.items.push(items.stick)
}

function swim() {
  bear.items.push(items.mace)
}

function taser() {
  bear.items.push(items.taser)
}

function reset() {
  bear.moodIndex = 0
  bear.health = 100
  bear.hits = 0
  bear.items = []
  update()
}