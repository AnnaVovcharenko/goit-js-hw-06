
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



//const elements ={
 // divBoxes : document.querySelector('#boxes'),
  //input : document.querySelector('#controls'),
  //buttonCreate : document.querySelector('button[data-create]'),
 // buttonDestroy : document.querySelector('button[data-destroy]')
//}
//elements.buttonCreate.addEventListener('click', () =>{
//const amount = +elements.input.firstElementChild.value;
//createBoxes(amount);})



//function createBoxes(amount) {
//elements.divBoxes.innerHTML = new Array(amount)
//.fill(0)
//.map((item, indx) => {
//const size = 30 + indx * 10;
//const backgroundColor = getRandomHexColor();
//return `<div style="width:${size} ; height:${size} ; background:${backgroundColor} ;"></div> `;

//})
//.join('');
//console.log(elements.divBoxes);
//}
//elements.buttonDestroy.addEventListener('click', destroyBox);
//function destroyBox() {
 // elements.divBoxes.innerHTML = ''; 
//}

//.firstElementChild