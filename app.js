let activeBear = 0;

let bear = [{
  name: 'Happy Bear',
  health: 100,
  poke: 0,
  slap: 0,
  kick: 0,
  tolerance: 3,
  moodIndex: 0,
  images: ['/assets/happybear2.jpg', '/assets/angrybear2.jpg', '/assets/claws.jpg'],
}, {
  name: 'Angry Bear',
  health: 100,
  poke: 0,
  slap: 0,
  kick: 0,
  tolerance: 1,
  moodIndex: 0,
  images: ['/assets/happybear2.jpg', '/assets/angrybear2.jpg', '/assets/claws.jpg'],
}, {
  name: 'Bear Attack',
  health: 100,
  poke: 0,
  slap: 0,
  kick: 0,
  tolerance: 0,
  moodIndex: 0,
  images: ['/assets/happybear2.jpg', '/assets/angrybear2.jpg', '/assets/claws.jpg'],
}

function poke() {
  bear.health--
  update()
}

function slap() {
  bear.health -= 30
  update()
}

function kick() {
  bear.health -= 50
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

function run() {
  bear.health++
  update()
}

function swim() {
  bear.health += 10
  update()
}

function feed() {
  bear.health += 25
  update()
}

function reset() {
  bear.moodIndex = 0
  bear.health = 100
  update()
}