function resetAll() {
  document.location.reload("index.html").reset();
}

var a = document.getElementById("change1");	
var b = document.getElementById("change2");
var c = document.getElementById("change3");
var d = document.getElementById("change4");	
var e = document.getElementById("change5");
var f = document.getElementById("change6");
var g = document.getElementById("change7");
var h = document.getElementById("change8");
var i = document.getElementById("change9");
var j = document.getElementById("change10");
var k = document.getElementById("change11");
var l = document.getElementById("change12");
var m = document.getElementById("change13");
var n = document.getElementById("change14");
var o = document.getElementById("change15");
var p = document.getElementById("change16");
var q = document.getElementById("bb");
var audio1 = document.getElementById("you-died");
var audio2 = document.getElementById("you-scared");

function myFunction() {
  alert("All images must be the same to play sound, each box has an image that's the same as another");
}
function sound(elem){
	audio2.play();
}

function nextImage(el){
	if (a.src.match("images/ghost.jpg")){
		a.src = "images/death.jpg";
	} else if (a.src.match("images/death.jpg")){
		a.src = "images/horror.jpg";
	} else if (a.src.match("images/horror.jpg")){
		a.src = "images/ghost.jpg";
	} else {
	}
}

function nextImage1(el){
	if (b.src.match("images/screampic.jpg")){
		b.src = "images/what.jpg";
	} else if (b.src.match("images/what.jpg")){
		b.src = "images/horror.jpg";
	} else if (b.src.match("images/horror.jpg")){
		b.src = "images/screampic.jpg";
	} else {
	}
}

function nextImage2(el){
	if (c.src.match("images/scream3.jpg")){
		c.src = "images/pum.jpg";
	} else if (c.src.match("images/pum.jpg")){
		c.src = "images/horror.jpg";
	} else if (c.src.match("images/horror.jpg")){
		c.src = "images/scream3.jpg";
	} else {
	}
}

function nextImage3(el){
	if (d.src.match("images/scream.jpg")){
		d.src = "images/sadako.jpg";
	} else if (d.src.match("images/sadako.jpg")){
		d.src = "images/horror.jpg";
	} else if (d.src.match("images/horror.jpg")){
		d.src = "images/scream.jpg";
	} else {
	}
}

function nextImage4(el){
	if (e.src.match("images/mouth.jpg")){
		e.src = "images/sadako.jpg";
	} else if (e.src.match("images/sadako.jpg")){
		e.src = "images/horror.jpg";
	} else if (e.src.match("images/horror.jpg")){
		e.src = "images/mouth.jpg";
	} else {
	}
}

function nextImage5(el){
	if (f.src.match("images/smile2.jpg")){
		f.src = "images/pum.jpg";
	} else if (f.src.match("images/pum.jpg")){
		f.src = "images/horror.jpg";
	} else if (f.src.match("images/horror.jpg")){
		f.src = "images/smile2.jpg";
	} else {
	}
}

function nextImage6(el){
	if (g.src.match("images/smile.jpg")){
		g.src = "images/what.jpg";
	} else if (g.src.match("images/what.jpg")){
		g.src = "images/horror.jpg";
	} else if (g.src.match("images/horror.jpg")){
		g.src = "images/smile.jpg";
	} else {
	}
}

function nextImage7(el){
	if (h.src.match("images/mouthful.jpg")){
		h.src = "images/death.jpg";
	} else if (h.src.match("images/death.jpg")){
		h.src = "images/horror.jpg";
	} else if (h.src.match("images/horror.jpg")){
		h.src = "images/mouthful.jpg";
	} else {
	}
}

function nextImage8(el){
	if (i.src.match("images/12.jpg")){
		i.src = "images/sadako.jpg";
	} else if (i.src.match("images/sadako.jpg")){
		i.src = "images/horror.jpg";
	} else if (i.src.match("images/horror.jpg")){
		i.src = "images/12.jpg";
	} else {
	}
}

function nextImage9(el){
	if (j.src.match("images/isgod.jpg")){
		j.src = "images/pum.jpg";
	} else if (j.src.match("images/pum.jpg")){
		j.src = "images/horror.jpg";
	} else if (j.src.match("images/horror.jpg")){
		j.src = "images/isgod.jpg";
	} else {
	}
}

function nextImage10(el){
	if (k.src.match("images/friendly.jpg")){
		k.src = "images/what.jpg";
	} else if (k.src.match("images/what.jpg")){
		k.src = "images/horror.jpg";
	} else if (k.src.match("images/horror.jpg")){
		k.src = "images/friendly.jpg";
	} else {
	}
}

function nextImage11(el){
	if (l.src.match("images/back.jpg")){
		l.src = "images/death.jpg";
	} else if (l.src.match("images/death.jpg")){
		l.src = "images/horror.jpg";
	} else if (l.src.match("images/horror.jpg")){
		l.src = "images/back.jpg";
	} else {
	}
}

function nextImage12(el){
	if (m.src.match("images/all.jpg")){
		m.src = "images/what.jpg";
	} else if (m.src.match("images/what.jpg")){
		m.src = "images/horror.jpg";
	} else if (m.src.match("images/horror.jpg")){
		m.src = "images/all.jpg";
	} else {
	}
}

function nextImage13(el){
	if (n.src.match("images/mim.jpg")){
		n.src = "images/sadako.jpg";
	} else if (n.src.match("images/sadako.jpg")){
		n.src = "images/horror.jpg";
	} else if (n.src.match("images/horror.jpg")){
		n.src = "images/mim.jpg";
	} else {
	}
}

function nextImage14(el){
	if (o.src.match("images/hands.jpg")){
		o.src = "images/death.jpg";
	} else if (o.src.match("images/death.jpg")){
		o.src = "images/horror.jpg";
	} else if (o.src.match("images/horror.jpg")){
		o.src = "images/hands.jpg";
	} else {
	}
}

function nextImage15(el){
	if (p.src.match("images/mime.jpg")){
		p.src = "images/pum.jpg";
	} else if (p.src.match("images/pum.jpg")){
		p.src = "images/horror.jpg";
	} else if (p.src.match("images/horror.jpg")){
		p.src = "images/mime.jpg";
	} else {
	}
}

function  checkConfiguration(el){
	if(a.src.match("images/horror.jpg") && b.src.match("images/horror.jpg") && c.src.match("images/horror.jpg") && d.src.match("images/horror.jpg") && e.src.match("images/horror.jpg") && f.src.match("images/horror.jpg")&& g.src.match("images/horror.jpg")&& h.src.match("images/horror.jpg")&& i.src.match("images/horror.jpg")&& j.src.match("images/horror.jpg")&& k.src.match("images/horror.jpg")&& l.src.match("images/horror.jpg")&& m.src.match("images/horror.jpg")&& n.src.match("images/horror.jpg")&& o.src.match("images/horror.jpg")&& p.src.match("images/horror.jpg")){
		document.getElementById("you-died").play();
	} else {}
}