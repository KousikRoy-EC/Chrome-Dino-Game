score=0;
 point=true;

 audio = new Audio('gameover.mp3');
 audioover= new Audio('music.mp3')
 setTimeout(() => {
     audioover.play();
 }, 1000);
document.onkeydown = function (e) {
    console.log("key", e.keyCode);
    if (e.keyCode == 38 || e.keyCode == 87) {
        player = document.querySelector('.player');
        player.classList.add('animate-player');
        setTimeout(() => {
            player.classList.remove('animate-player');
        }, 500);
    }
    if (e.keyCode == 39) {
        player = document.querySelector('.player');
        leftvalue = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = leftvalue + 200 + "px";
    }
    if (e.keyCode == 37) {
        player = document.querySelector('.player');
        leftvalue = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (leftvalue - 200) + "px";
    }
}


setInterval(() => {
    player = document.querySelector('.player');
    obstracle = document.querySelector('.obstracle');
    gameover = document.querySelector('.finish');
restart =document.querySelector('.restartgame');
    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('bottom'));


    ox = parseInt(window.getComputedStyle(obstracle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstracle, null).getPropertyValue('bottom'));

value_x=Math.abs(ox-px);
value_y=Math.abs(oy-py);


if(value_x<220 && value_y<25){
gameover.style.visibility ="visible";
restart.style.visibility ="visible";
obstracle.classList.remove('obstracle-ani');
audio.play();
setInterval(() => {
    audio.pause();
    audioover.pause()
}, 1000);

}
else if(point && value_x<100){
    score=score+1;
    updatingScore(score);
    point=false;
    setInterval(() => {
        point=true;
    }, 1000);


    setTimeout(() => {
        animationduraton=parseFloat(window.getComputedStyle(obstracle, null).getPropertyValue('animaton-duration'));
duraton = animationduraton -0.1
   obstracle.style.animationDuration= duraton + "s";
    }, 500);
}

}, 100);



function updatingScore(score) {
    scorecard.innerHTML ="Your Score : " + score;
}