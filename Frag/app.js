const mix1Players = document.getElementById("mix1Players");
const mix1Map = document.getElementById("mix1Map");
const mix1 = function () {
  fetch("https://fragcommunity.onrender.com/results/mix1")
    .then((response) => response.json())
    .then((data) => {
      mix1Players.innerHTML = data.players + "/" + data.maxPlayers;
      mix1Map.innerHTML = data.map;
    });
};

mix1();
setInterval(() => {
  mix1();
}, 15000);

const mix2Players = document.getElementById("mix2Players");
const mix2Map = document.getElementById("mix2Map");
const mix2 = function () {
  fetch("https://fragcommunity.onrender.com/results/mix2")
    .then((response) => response.json())
    .then((data) => {
      mix2Players.innerHTML = data.players + "/" + data.maxPlayers;
      mix2Map.innerHTML = data.map;
    });
};

mix2();
setInterval(() => {
  mix2();
}, 15000);

const mix3Players = document.getElementById("mix3Players");
const mix3Map = document.getElementById("mix3Map");
const mix3 = function () {
  fetch("https://fragcommunity.onrender.com/results/mix3")
    .then((response) => response.json())
    .then((data) => {
      mix3Players.innerHTML = data.players + "/" + data.maxPlayers;
      mix3Map.innerHTML = data.map;
    });
};

mix3();
setInterval(() => {
  mix3();
}, 15000);

const mix4Players = document.getElementById("mix4Players");
const mix4Map = document.getElementById("mix4Map");
const mix4 = function () {
  fetch("https://fragcommunity.onrender.com/results/mix4")
    .then((response) => response.json())
    .then((data) => {
      mix4Players.innerHTML = data.players + "/" + data.maxPlayers;
      mix4Map.innerHTML = data.map;
    });
};

mix4();
setInterval(() => {
  mix4();
}, 15000);

const surfPlayers = document.getElementById("surfPlayers");
const surfMap = document.getElementById("surfMap");
const surf = function () {
  fetch("https://fragcommunity.onrender.com/results/surf")
    .then((response) => response.json())
    .then((data) => {
      surfPlayers.innerHTML = data.players + "/" + data.maxPlayers;
      surfMap.innerHTML = data.map;
    });
};

surf();
setInterval(() => {
  surf();
}, 15000);

const jailPlayers = document.getElementById("jailPlayers");
const jailMap = document.getElementById("jailMap");
const jail = function () {
  fetch("https://fragcommunity.onrender.com/results/jail")
    .then((response) => response.json())
    .then((data) => {
      jailPlayers.innerHTML = data.players + "/" + data.maxPlayers;
      jailMap.innerHTML = data.map;
    });
};

jail();
setInterval(() => {
  jail();
}, 15000);

const zombiePlayer = document.getElementById("zombiePlayers");
const zombieMap = document.getElementById("zombieMap");
const zombie = function () {
  fetch("https://fragcommunity.onrender.com/results/zombie")
    .then((response) => response.json())
    .then((data) => {
      zombiePlayers.innerHTML = data.players + "/" + data.maxPlayers;
      zombieMap.innerHTML = data.map;
    });
};

zombie();
setInterval(() => {
  zombie();
}, 15000);

const zombieEscapePlayer = document.getElementById("zombieEscapePlayers");
const zombieEscapeMap = document.getElementById("zombieEscapeMap");
const zombieEscape = function () {
  fetch("https://fragcommunity.onrender.com/results/zombieEscape")
    .then((response) => response.json())
    .then((data) => {
      zombieEscapePlayers.innerHTML = data.players + "/" + data.maxPlayers;
      zombieEscapeMap.innerHTML = data.map;
    });
};

zombieEscape();
setInterval(() => {
  zombieEscape();
}, 15000);

const baseBuilderPlayer = document.getElementById("baseBuilderPlayers");
const baseBuilderMap = document.getElementById("baseBuilderMap");
const baseBuilder = function () {
  fetch("https://fragcommunity.onrender.com/results/baseBuilder")
    .then((response) => response.json())
    .then((data) => {
      baseBuilderPlayers.innerHTML = data.players + "/" + data.maxPlayers;
      baseBuilderMap.innerHTML = data.map;
    });
};

baseBuilder();
setInterval(() => {
  baseBuilder();
}, 15000);
