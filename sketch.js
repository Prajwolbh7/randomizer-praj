//randiomizer favourite food


let friends = [];

let randomIndex;
let animating = false;
let rando = [];
let imageCounter = 0;
let startRandomizerbutton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;


function preload() {


  for (let i = 0; i <= 13; i++) {
    rando[i] = loadImage("images/rando_" + i + ".JPG")
  }
}


function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(200);
  textSize(40);
  imageMode(CENTER);
  frameRate(8);

  text("click to randomize", 100, 100);
  //setInterval(randomizer,2000);
  //button = createButton("click to randomize");

  startRandomizerbutton = select("#randButton");
  startRandomizerbutton.mousePressed(buttonPressed);

  addMoreButton = select("#addMoreButton");
  addMoreButton.mousePressed(addAnotherInput);

  for (let i = 0; i <3; i++){

  nameInputs.push(createInput());
  nameInputs[nameInputs.length-1].parent("#inputFields");

}
}

function draw() {

  //background(200);

  if (animating == true) {
    clear(); //it clear anything behide the canvas
    image(rando[imageCounter], width / 2, height / 2);
    if (imageCounter < rando.length-1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }

  }


}


function addAnotherInput(){

  nameInputs.push(createInput());
  nameInputs[nameInputs.length-1].parent("#inputFields");

}
function randiomizer() {



  animating = false;
  if (friends[0]) {
    // this displays random name and slice it out of array
    //background(random(200, 255));
    clear();
    randomIndex = int(random(friends.length))
    // calls the ramdom index from friends array
    //console.log(friends[randomIndex].name);
    // to print in the canvas write text and give coordinates
        image(rando[imageCounter], width / 2, height / 2);
    text(`${friends[randomIndex]}`, 100 , 520 );
    //text(friends[randomIndex].name +"'s favourite color is'"+ friends[randomIndex].color, 100,100);

    friends.splice(randomIndex, 1);
    //console.log(friends);


  } else {

    background(190);
    text("NO favourites food!!!", 150, 300);
  }

}

function buttonPressed() {

  if (firstTime){
  for (let i = 0; i < nameInputs.length; i++){
    friends.push(nameInputs[i].value());
  }
    firstTime = false;
  }


  animating = true;
  setTimeout(randiomizer, 2000);

}
