// JavaScript Document
console.log('ho')
var menuKnop = document.querySelector('#open');
var menu = document.querySelector('nav ul');
var sluitKnop = document.querySelector('#dicht');

function openklappen (){
	menu.hidden = false;
}

function dichtklappen(){
	menu.hidden = true;
}

menuKnop.addEventListener('click', openklappen);
sluitKnop.addEventListener('click', dichtklappen);