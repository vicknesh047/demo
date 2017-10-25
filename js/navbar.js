/*Start Of Slide Bar In and Out */
function myFunction() {
	document.getElementsByClassName("align")[0].classList.toggle("responsive");
	document.getElementsByClassName("main")[0].classList.toggle("bodyresponsive");
	document.getElementsByClassName("Overlay")[0].classList.toggle("bodyOverlay");
}
/*End Of Slide Bar In and Out */
/*Start of Border color for active Menu */
function setActive() {
	aObj = document.getElementById('nav').getElementsByTagName('a');
	for (i = 0; i < aObj.length; i++) {
		if (document.location.href.indexOf(aObj[i].href) >= 0) {
			aObj[i].className = 'active';
		}
	}
}
window.onload = setActive;
/*End of Border color for active Menu */
