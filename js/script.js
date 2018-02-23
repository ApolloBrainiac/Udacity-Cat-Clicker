// alert("Hello World!");
var elem = document.getElementById('cat');
var pokes = 0;

elem.addEventListener('click', function(){
	pokes += 1;
	alert("I said don't! You've poke the poor cat " + pokes + " times, now!");
}, false);