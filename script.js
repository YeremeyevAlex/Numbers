let tablica = document.getElementById("tablica");
let A = [];
let D = [];
let r;
let x = 0;
let counter = 16;
			
for(i = 0; i <= 15; i++) {
	A[i] = i;
}
			
for(i = 0; i < 4; i++) {
	D[i] = [];
	for(j = 0; j < 4; j++) {
		r = rand(A.length)
		D[i][j] = A[r];
		A.splice(r, 1);
	}
}
console.log(D);
			
let kod = '<caption id="count">16</caption>';
for(i = 0; i < 4; i++) {
	kod += "<tr>";
	for(j = 0; j < 4; j++) {
		kod += '<td id="c' + i + j + '" onclick="press(\'c' + i + j + '\')">' + D[i][j] + '</td>';
	}
	kod += "</tr>";
}
tablica.innerHTML = kod;
			
let count = document.getElementById("count");
let scetcik = setInterval(countDown, 1000);
			
function countDown(){
	count.innerHTML = counter--;
	if(counter < 0) {
		clearInterval(scetcik);					 
		alert("ВРЕМЯ ВЫШЛО. ВЫ ПРОИГРАЛИ !");
	}
}
function press(id) {
	let cell = document.getElementById(id);
	if(cell.innerHTML == x) {
		cell.style.color = "#EFEFEF";	
		x++;
		if(x > 15) { 
			clearInterval(scetcik);
			alert("ВЫ ПОБЕДИЛИ !");
		}
	}
}
function rand(max) {
	return Math.floor(Math.random() * max);
}