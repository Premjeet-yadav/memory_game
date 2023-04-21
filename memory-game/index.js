const moves = document.getElementById("moves-count");
const timevalue = document.getElementById("time");
const startbutton = document.getElementById("start");
const stopbutton = document.getElementById("stop");
const gamecontainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards ;
let interval;
let firstcard = false;
let secondcard = false;


//items array

const items = [
    { name: "bee", image: "bee.png" },
    { name: "crocodile", image: "crocodile.png" },
    { name: "macaw", image: "macaw.png" },
    { name: "gorilla", image: "gorilla.png" },
    { name: "tiger", image: "tiger.png" },
    { name: "monkey", image: "monkey.png" },
    { name: "chameleon", image: "chameleon.png" },
    { name: "piranha", image: "piranha.png" },
    { name: "anaconda", image: "anaconda.png" },
    { name: "sloth", image: "sloth.png" },
    { name: "cockatoo", image: "cockatoo.png" },
    { name: "toucan", image: "toucan.png" },
  ];

  