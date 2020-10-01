//randiomizer favourite food


let friends = [{
  name: "Mike",
  food: "Pizza"
},{
  name: "Rocky",
  food: "Pasta"
},{
  name: "Danny",
  food: "Sandwich"
},{
  name: "Romeo",
  food: "Burger"
},{
  name: "Ephny",
  food: "rice"
}];

let randomIndex;
let animating = false;


function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(40);

  text("click to randomize", 100,100);


}

function draw() {

  if (animating == true){

    fill(random(10,100), random(20,50),random(90,100));
   ellipse(random(width),random(height),random(150,220));
   rect(random(width),random(height),random(50,100));
   circle(random(width),random(height),random(50,60));
}else if(animating=false) {
  color(200);
}
}
function randiomizer() {

  animating = false;
  if(friends[0]){
    // this displays random name and slice it out of array
  background(random(200, 255));
  randomIndex = int(random(friends.length))
  // calls the ramdom index from friends array
  //console.log(friends[randomIndex].name);
  // to print in the canvas write text and give coordinates
 text(`${friends[randomIndex].name}' s favourite food is
 ${friends[randomIndex].food}`, 100,100);
  //text(friends[randomIndex].name +"'s favourite color is'"+ friends[randomIndex].color, 100,100);

  friends.splice(randomIndex,1);
  //console.log(friends);
  animating= false;

}else {

  background(0);
  text("NO favourites food!!!", 150,300);
}

}

function mousePressed(){

  animating = true;
  setTimeout(randiomizer,2000);


}
