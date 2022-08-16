

//VARIABLES DES OBJETS :
//personnage
let perso = document.querySelector(".perso");

//fond
let fond = document.querySelector(".fond");

//obstacles
let rocket1 = document.querySelector('.rocket_1');
let rocket2 = document.querySelector('.rocket_2');
let rocket3 = document.querySelector('.rocket_3');
let rocket4 = document.querySelector('.rocket_4');
let rocket5 = document.querySelector('.rocket_5');
let rocket6 = document.querySelector('.rocket_6');
let rocket7 = document.querySelector('.rocket_7');
let rocket8 = document.querySelector('.rocket_8');
let rocket9 = document.querySelector('.rocket_9');
let rocket10 = document.querySelector('.rocket_10');
let rocket11 = document.querySelector('.rocket_11');
let rocket12 = document.querySelector('.rocket_12');
let rocket13 = document.querySelector('.rocket_13');
let rocket14 = document.querySelector('.rocket_14');

//bouttons de controle
let b1 = document.querySelector('#bouton_haut');
let b2 = document.querySelector('#bouton_bas');
let b3 = document.querySelector('#bouton_retour');

//GameOver
let over = document.querySelector('.game_over');
let score = document.querySelector('.affiche_score');

//boutton re_jouer
let jeuFin = document.querySelector('.over_sougame');
let rejouer = document.querySelector('.over_game');

//timer
let time = document.querySelector('#p_timer');

//FONCTIONS DES OBJETS :
//boutton haut
b1.addEventListener('click', function(){
    perso.style.top = "10px";
});

//bouton bas
b2.addEventListener('click', function(){
    perso.style.top = "600px";
});

//bouton retour
b3.addEventListener('click', function(){
    perso.style.top = "300px";
});

//bouton rejouer
rejouer.addEventListener('click', function(){
    location.reload();
});


//DETECTION D'INPACTES :
//obstacle_1
var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft = parseInt(window.getComputedStyle(rocket1).getPropertyValue("left")) ;

    if(obstaclesLeft<200 && obstaclesLeft >0 && persoTop==300){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_2
var verification2 = setInterval(function(){
    var persoTop2 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft2 = parseInt(window.getComputedStyle(rocket2).getPropertyValue("left")) ;

    if(obstaclesLeft2<200 && obstaclesLeft2 >0 && persoTop2==10){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_3
var verification3 = setInterval(function(){
    var persoTop3 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft3 = parseInt(window.getComputedStyle(rocket3).getPropertyValue("left")) ;

    if(obstaclesLeft3<200 && obstaclesLeft3 >0 && persoTop3==300){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_4
var verification4 = setInterval(function(){
    var persoTop4 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft4 = parseInt(window.getComputedStyle(rocket4).getPropertyValue("left")) ;

    if(obstaclesLeft4<200 && obstaclesLeft4 >0 && persoTop4==600){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_5
var verification5 = setInterval(function(){
    var persoTop5 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft5 = parseInt(window.getComputedStyle(rocket5).getPropertyValue("left")) ;

    if(obstaclesLeft5<200 && obstaclesLeft5 >0 && persoTop5==300){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_6
var verification6 = setInterval(function(){
    var persoTop6 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft6 = parseInt(window.getComputedStyle(rocket6).getPropertyValue("left")) ;

    if(obstaclesLeft6<200 && obstaclesLeft6 >0 && persoTop6==10){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_7
var verification7 = setInterval(function(){
    var persoTop7 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft7 = parseInt(window.getComputedStyle(rocket7).getPropertyValue("left")) ;

    if(obstaclesLeft7<200 && obstaclesLeft7 >0 && persoTop7==10){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_8
var verification8 = setInterval(function(){
    var persoTop8 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft8 = parseInt(window.getComputedStyle(rocket8).getPropertyValue("left")) ;

    if(obstaclesLeft8<200 && obstaclesLeft8 >0 && persoTop8==300){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_9
var verification9 = setInterval(function(){
    var persoTop9 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft9 = parseInt(window.getComputedStyle(rocket9).getPropertyValue("left")) ;

    if(obstaclesLeft9<200 && obstaclesLeft9 >0 && persoTop9==600){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_10
var verification10 = setInterval(function(){
    var persoTop10 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft10 = parseInt(window.getComputedStyle(rocket10).getPropertyValue("left")) ;

    if(obstaclesLeft10<200 && obstaclesLeft10 >0 && persoTop10==300){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_11
var verification11 = setInterval(function(){
    var persoTop11 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft11 = parseInt(window.getComputedStyle(rocket11).getPropertyValue("left")) ;

    if(obstaclesLeft11<200 && obstaclesLeft11 >0 && persoTop11==10){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_12
var verification12 = setInterval(function(){
    var persoTop12 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft12 = parseInt(window.getComputedStyle(rocket12).getPropertyValue("left")) ;

    if(obstaclesLeft12<200 && obstaclesLeft12 >0 && persoTop12==300){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_13
var verification13 = setInterval(function(){
    var persoTop13 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft13 = parseInt(window.getComputedStyle(rocket13).getPropertyValue("left")) ;

    if(obstaclesLeft13<200 && obstaclesLeft13 >0 && persoTop13==600){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);

//obstacle_14
var verification14 = setInterval(function(){
    var persoTop14 = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft14 = parseInt(window.getComputedStyle(rocket14).getPropertyValue("left")) ;

    if(obstaclesLeft14<200 && obstaclesLeft14 >0 && persoTop14==300){
        over.innerHTML = "GAME OVER";
        perso.hidden = true;
        rejouer.hidden = false;
        jeuFin.hidden = false;
        clearInterval(intervalId);
        p2.insertAdjacentElement('afterend',p1.cloneNode(true));
        perso.style.animation = "none";
        rocket1.style.animation = "none";
        rocket2.style.animation = "none";
        rocket3.style.animation = "none";
        rocket4.style.animation = "none";
        rocket5.style.animation = "none";
        rocket6.style.animation = "none";
        rocket7.style.animation = "none";
        rocket8.style.animation = "none";
        rocket9.style.animation = "none";
        rocket10.style.animation = "none";
        rocket11.style.animation = "none";
        rocket12.style.animation = "none";
        rocket13.style.animation = "none";
        rocket14.style.animation = "none";
        
    }
},1);



//timer
let p1 = document.getElementById('p1');
let intervalId;

let dec = 0;
let sec = 0;
let min = 0;
let heu = 0;
p1.textContent = heu + ' : ' + min + ' :' + sec + ' . ' + dec;

window.onload = function timer(){
    intervalId = setInterval(function(){
        p1.textContent = heu + ' : ' + min + ' : ' + sec + ' . ' + dec;
        dec += 1;
        if(dec >= 10){dec = 0; sec += 1;}
        if(sec >= 60){sec = 0; min += 1;}
        if(min >= 60){min = 0; heu += 1;}
    }, 100)
}


