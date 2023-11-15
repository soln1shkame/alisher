var Som = 500
var Pul = 250
var Yana = 120

var Dollar = (Som + Pul) * 9433.34
var Euro = Yana * 10354.03

var elCalculate = Dollar + Euro

var elHeading = document.querySelector(".heading")

var Jami = Number(prompt("Mablag'ingizni kiriting"));

if (Jami >= elCalculate) {
    elHeading.textContent = ("Oq Yo'l!🙂");
}

else {
    elHeading.textContent = ("Sabr tiliman🙂");
}