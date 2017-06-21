var colorarray = new Array ();

colorarray[0] = new Array ("#307585", "#65878F", "#4F8490", "#197489", "#07687F", "#D6AC4A", "#E8D2A1", "#E9C87D", "#DDA523", "#CE9106", "#D65B4A", "#E8A9A1", "#E98A7D", "#DD3923", "#CE1D06");
colorarray[1] = new Array ("#7164CA", "#BFB8F1", "#948ADF", "#5346B3", "#3A2BA2", "#935BC7", "#D3B4F0", "#B283DD", "#783DAE", "#62229D", "#5B89C4", "#B4CEEF", "#83A9DB", "#3D6CAA", "#235799");
colorarray[2] = new Array ("#FFBC67", "#FFC985", "#FFD7A4", "#DA727E", "#E18E98", "#E9AAB2", "#AC6C82", "#BD899B", "#CDA7B4", "#685C79", "#867D94", "#A49DAF", "#455C7B", "#6A7D95", "#8F9DB0");
colorarray[3] = new Array ("#C03C44", "#F04B55", "#F36F77", "#C3717C", "#F48D9B", "#F6A4AF", "#8AADAB", "#ADD8D6", "#BDE0DE", "#028072", "#03A08E", "#35B3A5", "#BFBDA7", "#EFECD1", "#F2F0DA")
colorarray[4] = new Array ("#CB828A", "#FEA2AD", "#FEB5BD", "#CCA297", "#FFCABD", "#FFD5CA", "#CCBFA4", "#FFEFCD", "#FFF2D7", "#629EA5", "#7AC6CE", "#95D1D8", "#356E70", "#428A8C", "#68A1A3")

var colorcyclerand = Math.floor((Math.random() * 3) + 0);
var n = 50

for (var i = 0; i < n; i++) {
	var divTag = document.createElement("div");
	divTag.id = "circle" + i;
	document.getElementById("content").appendChild(divTag);
}

function colorcycle() {
	var fullbackcolor = Math.floor((Math.random() * 15) + 0);
	colorcyclerand = Math.floor((Math.random() * colorarray.length) + 0);
	document.getElementById("fullback").style.background = colorarray[colorcyclerand][fullbackcolor];
	setInterval(function backtimer() {
		document.getElementById("fullback").style.background = "#EEE";
	},1000);
}

function buttonhover() {
	var buttoncolor = Math.floor((Math.random() * 15) + 0);
	document.getElementById("button").style.background = colorarray[colorcyclerand][buttoncolor];
}

function buttonleave() {
	document.getElementById("button").style.background = "#EEE";
}

function start() {
	document.getElementById("button").style.display = "none";
	setInterval(function timer() {
		for (i = 0; i < n; i++) {
			var arrayrand = Math.floor((Math.random() * 15) + 0);
			document.getElementById("circle"+i).style.background = colorarray[colorcyclerand][arrayrand];

			var randleft = Math.floor((Math.random() * 90) + 0);
			var randtop = Math.floor((Math.random() * 90) + 0);
			document.getElementById("circle"+i).style.left = randleft+"%";
			document.getElementById("circle"+i).style.top = randtop+"%";
			
			var rand3 = Math.floor((Math.random() * 200) + 25);
			document.getElementById("circle"+i).style.width = rand3+"px";
			document.getElementById("circle"+i).style.height = rand3+"px";
		}
	},500);
}