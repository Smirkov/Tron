// primitives de déplacement/divers


// variables globales
var CTX; 					// contexte graphique
var ROBOTS = new Object()	// tableau associatif contenant les ROBOTS 
							// le nom du robot est associé aux informations suivantes de position 
							// du robot, ces coordonnées (x,y) et  son orientation.
							// cet ensemble forme un tableau. Ainsi :
							// 		ROBOTS["nono"][0] représente la coordonnée en x
							// 		ROBOTS["nono"][1] représente la coordonnée en y
							// 		ROBOTS["nono"][2] représente l'orientation
							//      ROBOTS["nono"][3] représente la couleur
var TAILLE ;				// traille écran (carré)
var CANVASDOM;

/* ********************************** */
/* déplacements de base de la tortue  */
/* ********************************** */

// initialisation 
function initCanvas() {
	CANVASDOM = document.getElementById('ecran');
	CTX = CANVASDOM.getContext('2d');
	TAILLE = CANVASDOM.width;
}
// efface écran
function effaceEcran() {
	CTX.clearRect(0, 0, CANVASDOM.width, CANVASDOM.height);
}

// nouveau robot
function nouveau(nom,x=TAILLE/2,y=TAILLE/2,orientation=0,couleur="#000000") {
	ROBOTS[nom] = [x,y,orientation,couleur];
}

// place le robot aux coordonnées "posx" et "posy"
function pose(posx,posy,nom) {
	ROBOTS[nom][0] = posx;
	ROBOTS[nom][1] = posy;
	CTX.moveTo(posx,posy);
}

// definie l'orientation de la tortue (absolue, cercle trigonométrique)
function oriente(angle,nom) {
	ROBOTS[nom][2] = angle;
}

// change l'orientation de la tortue (relatif à sa position)
function tourne(angle,nom) {
	ROBOTS[nom][2] = (ROBOTS[nom][2] + angle) % 360;
}

// avance la tortue de "pas" pixels
function avance(pas,nom) {
	CTX.beginPath();
	CTX.strokeStyle = ROBOTS[nom][3];
	var x = ROBOTS[nom][0];
	var y = ROBOTS[nom][1];
	CTX.moveTo(x,y);
	angleRad =  ROBOTS[nom][2] * (Math.PI/180);
	x = x + Math.cos(angleRad)*pas;
	y = y + Math.sin(angleRad)*pas;
	CTX.lineTo(x,y);
    CTX.lineWidth = 3;
	CTX.stroke();
	CTX.closePath()
	ROBOTS[nom][0] = x;
	ROBOTS[nom][1] = y;
}

function getCoords(nom) {
	return ROBOTS[nom];
}
