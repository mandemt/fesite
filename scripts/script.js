console.log('yo')
var openKnop = document.querySelector('#menuknop');
var menu = document.querySelector('#menu');
var sluitKnop = document.querySelector('#dichtknop');


openKnop.addEventListener('click', sluiten);
sluitKnop.addEventListener('click', openen);

function sluiten() {
	menu.classList.remove('open')
	menu.classList.add('dicht');
	console.log
}
function openen() {
	menu.classList.remove('dicht');
	menu.classList.add('open');
}

openKnop.addEventListener('click', openen);
sluitKnop.addEventListener('click', sluiten);