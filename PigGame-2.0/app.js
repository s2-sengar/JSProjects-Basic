var scores,roundScore,activePlayer,gameState;
intialize();
function intialize (){
    gameState=true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    sixVal=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('name-1').textContent='Player 2';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.querySelector('.dice-1').style.display='none';
    document.querySelector('.dice-2').style.display='none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameState===true){
        var dice;
        dice1=Math.floor(Math.random()*6+1);
        dice2=Math.floor(Math.random()*6+1);
        var dice1DoM=document.querySelector('.dice-1');
        var dice2DoM=document.querySelector('.dice-2');
        dice1DoM.style.display='block';
        dice1DoM.src='img/dice-'+dice1+'.png';
        dice2DoM.style.display='block';
        dice2DoM.src='img/dice-'+dice2+'.png';
        if(dice2===dice1){
            nextPlayer();
        }else{
            roundScore=+roundScore+dice1+dice2;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
    }
})
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameState===true){
        scores[activePlayer]=scores[activePlayer]+roundScore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>=100){    
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('#name-'+activePlayer).textContent='WINNER';
            gameState=false;
            document.querySelector('.dice-1').style.display='none';
            document.querySelector('.dice-2').style.display='none';
        }else{
            nextPlayer();
        }
    }
})
function nextPlayer(){
    roundScore=0;
    if(activePlayer===0){activePlayer=1}else{activePlayer=0;}
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice-1').style.display='none';
    document.querySelector('.dice-2').style.display='none';

}
document.querySelector('.btn-new').addEventListener('click',function(){
    intialize();
    
})