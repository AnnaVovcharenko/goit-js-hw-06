let numderUl = 0;
const ulCat = document.querySelectorAll('li.item')

ulCat.forEach(function (number) {
    numderUl += 1;
})
console.log(`Number of categories: ${numderUl}`);

const header = document.querySelectorAll('.item h2');
const Ul = document.querySelector('#categories');
//Animals
console.log(`Category: ${header[0].textContent}`);
const firstLiItem = Ul.firstElementChild;
//console.log(firstLiItem );
const ollLiFerst = firstLiItem.querySelectorAll('li');
//console.log(ollLiFerst);
let numderliAnimals = 0;
ollLiFerst.forEach(function (number) {
    numderliAnimals += 1;
});
console.log(`Elements: ${numderliAnimals}`);
//Products
console.log(`Category: ${header[1].textContent}`);
const naxtLiItem = firstLiItem.nextElementSibling;
const ollLiNext = naxtLiItem.querySelectorAll('li');
let numderliProducts = 0;
ollLiNext.forEach(function (number) {
    numderliProducts += 1;
});
console.log(`Elements: ${numderliProducts}`);
//Technologies
console.log(`Category: ${header[2].textContent}`);
const LastLiItem = Ul.lastElementChild;
const ollLiLast = LastLiItem.querySelectorAll('li');
let numderliTechnologies = 0;
ollLiLast.forEach(function (number) {
    numderliTechnologies += 1;
});
console.log(`Elements: ${numderliTechnologies}`);
