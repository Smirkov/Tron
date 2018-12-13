var obs;
var player = {};

player.Init = function (nom, xdepart, ydepart, orientation, couleur) {
    nouveau(nom, xdepart, ydepart, orientation, couleur);
};

player.move = function (nom) {
    long = 1;
    avance(long, nom);
};
player.left = function (nom) {
    tourne(270, nom);
}
player.right = function (nom) {
    tourne(90, nom);
};

player.obs2 = function (nom) {
    var dirX = 0;
    var dirY = 0;
    var x = getCoords(nom)[0];
    var y = getCoords(nom)[1];

    if (x > TAILLE || x < 0 || y > TAILLE || y < 0 || obs[y][x]) {
        var message = "";
        var couleurplayer = "";
        if (nom == "p1") {
            clearInterval(game);
            effaceEcran();
            winJ1();
        } else {
            clearInterval(game);
            effaceEcran();
            winJ2();
        }

        clearInterval(game);
    }
    if (!(y - dirY < 0 || x - dirX < 0 || x - dirX > TAILLE || y - dirY > TAILLE)) {
        obs[y - dirY][x - dirX] = true;
    }
    switch (getCoords(nom)[2]) {
        case 0:
            dirX = 1;
            dirY = 0;
            break;
        case 270:
            dirX = 0;
            dirY = -1;
            break;
        case 180:
            dirX = -1;
            dirY = 0;
            break;
        case 90:
            dirX = 0;
            dirY = 1;
            break;
    }
}

player.Init("p1", 50, 50, 0, couleur = "#b6fcf0");
player.Init("p2", 550, 550, 180, couleur = "#fdce68");