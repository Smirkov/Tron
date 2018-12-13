window.addEventListener("load", run, false);
var lancer = false;

function run() {
    document.getElementById("lancer").addEventListener("click",start,false);
    initCanvas();

    obs = [];
    for(var i = 0; i< TAILLE; i++){
        obs[i] = [];
        for(var j = 0; j< TAILLE; j++){
            obs[i][j] = false;
        }
    }
    
    document.addEventListener("keydown", changedir, false);
    
    function start(){
        if(!lancer){
            effaceEcran();
            game = window.setInterval(check,10);
            lancer = true;
        }
    }
        
    function changedir(e){
        if(e.key == "ArrowLeft"){
            player.left("p1");
        }
        else if(e.key == "ArrowRight"){
            player.right("p1");
        }
        if(e.key == "q"){
            player.left("p2");
        }
        else if(e.key == "d"){
            player.right("p2");
        }
        
    }

    
}
    
function check() {
    player.move("p1");
    player.obs2("p1");
    player.move("p2");
    player.obs2("p2");
}

function winJ1() {
    img = new Image();
    img.src = "./img/joueur2.png";
    img.onload = function () {
        drawImage(this);
    }
}

function winJ2() {
    img = new Image();
    img.src = "./img/joueur1.png";
    img.onload = function () {
        drawImage(this);
    }
}

function drawImage(imgObj) {
    CTX.clearRect(0, 0, CANVASDOM.width, CANVASDOM.height);
    CTX.drawImage(imgObj, 0, 0);
}
