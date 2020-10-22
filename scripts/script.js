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



var terugKnop = document.querySelector('main section button:first-of-type');
var heenKnop = document.querySelector('main section button:nth-of-type(2)');
var afbeelding1 = document.querySelector('main div');
var afbeelding2 = document.querySelector('main div:nth-of-type(2)');

terugKnop.addEventListener('click',vorige);
heenKnop.addEventListener('click',volgende);


function volgende() {
	console.log('heen');
	afbeelding1.classList.add('verschijn');
	// afbeelding2.clas sList.add('verdwijn');
}

function vorige(){
	console.log('terug');
	afbeelding2.classList.add('verschijn');
	afbeelding1.classList.add('verdwijn');
}