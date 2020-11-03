var menu = document.querySelector('nav ul:first-of-type');
var menuKnop = document.querySelector('nav ul:nth-of-type(2) button:first-of-type');
var sluitKnop = document.querySelector('nav ul:first-of-type button:first-of-type');

function dichtKlappen() {
	
	menu.classList.remove('dicht');
}

function openKlappen() {

	menu.classList.add('dicht');

}

menuKnop.addEventListener('click', openKlappen);
sluitKnop.addEventListener('click', dichtKlappen);

var product = document.querySelector('#fotogroot');
var foto1 = document.querySelector('#product ul li:first-of-type');
var foto2 = document.querySelector('#product ul li:nth-of-type(2)');
var foto3 = document.querySelector('#product ul li:nth-of-type(3)');

function foto1a(){
	product.src= "images/wegisweg1.png"
}
function foto2a(){
	product.src= "images/wegisweg2.png"

}
function foto3a(){
	product.src= "images/wegisweg3.png"
}

foto1.addEventListener('click', foto1a);
foto2.addEventListener('click', foto2a);
foto3.addEventListener('click', foto3a);

var hartKnop = document.querySelector('#product button ')
var hartPlaatje = document.querySelector('#product button img')

function leukVinden(){
	hartPlaatje.classList.toggle('leuk');

}
hartKnop.addEventListener('click', leukVinden)