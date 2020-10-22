console.log('yo')
var openKnop = document.querySelector('#menuknop');
var menu = document.querySelector('#menu');
var sluitKnop = document.querySelector('#dichtknop');


openKnop.addEventListener('click', sluiten);
sluitKnop.addEventListener('click', openen);

function sluiten() {
	menu.classList.remove('open')
	menu.classList.add('dicht');
	
}
function openen() {
	menu.classList.remove('dicht');
	menu.classList.add('open');
}

openKnop.addEventListener('click', openen);
sluitKnop.addEventListener('click', sluiten);





var favorietKnop = document.querySelector('.product button:first-of-type');
var favorietPlaatje = document.querySelector('.product img:nth-of-type(2)');


function favoriet(){
	console.log('favoriet')
	favorietPlaatje.classList.toggle('favoriet');

}

favorietKnop.addEventListener('click',favoriet);


var wegisweg1 = document.querySelector('.product>img');
var vergrootKnop = document.querySelector('.product button:nth-of-type(2)');
function vergroten(){
	console.log('vergroot')
	wegisweg1.classList.toggle('vergroten');
}
vergrootKnop.addEventListener('click', vergroten);


var klein1 = document.querySelector('.product ol li:first-of-type');
var klein2 = document.querySelector('.product ol li:nth-of-type(2)');
var klein3 = document.querySelector('.product ol li:nth-of-type(3)');
var klein4 = document.querySelector('.product ol li:nth-of-type(4)');
var klein5 = document.querySelector('.product ol li:nth-of-type(5)');

function andereFoto(){
	wegisweg1.src= "images/wegisweg1.png"
}

klein1.addEventListener('click',andereFoto);


function andereFoto2(){
	wegisweg1.src= "images/wegisweg2.png"
}

klein2.addEventListener('click',andereFoto2);

function andereFoto3(){
	wegisweg1.src= "images/wegisweg3.png"
}

klein3.addEventListener('click',andereFoto3);

function andereFoto4(){
	wegisweg1.src= "images/wegisweg4.png"
}

klein4.addEventListener('click',andereFoto4);

function andereFoto5(){
	wegisweg1.src= "images/wegisweg5.png"
}

klein5.addEventListener('click',andereFoto5);







