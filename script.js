// Phaser-Spielkonfiguration
const config = {
  type: Phaser.CANVAS, // Explizit den CANVAS-Renderer setzen
  width: document.getElementById("gameArea").clientWidth,
  height: document.getElementById("gameArea").clientHeight,
  canvas: document.getElementById("gameCanvas"),
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {
  // Hier könntest du später Bilder, Sounds usw. laden
}

function create() {
  // Text auf dem Spielfeld in der Mitte des Canvas
  this.add
    .text(
      this.cameras.main.width / 2, // X-Koordinate: Mitte des Canvas
      this.cameras.main.height / 2, // Y-Koordinate: Mitte des Canvas
      "Hallo Welt!", // Der Text
      { font: "40px Arial", fill: "#fff" } // Stil
    )
    .setOrigin(0.5); // Zentriere den Text
}

function update() {
  // Hier kannst du Animationen oder Spielmechaniken einfügen
}

// Event-Listener für die UI-Steuerung
document.getElementById("upButton").addEventListener("click", () => {
  console.log("Move Up");
});

document.getElementById("leftButton").addEventListener("click", () => {
  console.log("Move Left");
});

document.getElementById("downButton").addEventListener("click", () => {
  console.log("Move Down");
});

document.getElementById("rightButton").addEventListener("click", () => {
  console.log("Move Right");
});

document.getElementById("inspectButton").addEventListener("click", () => {
  console.log("Inspect");
});
