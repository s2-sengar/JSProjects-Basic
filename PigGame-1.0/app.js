var scores,roundScore,activePlayer,gameState;
intialize();

function intialize (){
    gameState=true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('name-1').textContent='Player 2';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}
// var scores,roundScore,activePlayer;
// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;
// /* Setting the initial current display value to 0 */
// document.getElementById('current-0').textContent=0;
// document.getElementById('score-0').textContent=0;
// document.getElementById('score-1').textContent=0;
/* document.querySelector('#current-'+activePlayer).textContent=dice; /*we can call it setter to select the current score value and change the text inside it */
/* We can also change the html */
/* 
    document.querySelector("#current-0").innerHTML='<em>' + dice + </em>
*/
/* We can also read a value from the browser using document.querySelector */
/* var x=document.querySelector('#score-1').textContent;
console.log(x); //geter*/
/* We can also change querySelector to change the CSS of an element */
// document.querySelector('.dice').style.display='none';
/* .style is used to target the CSS
    and after an .CSS Propery to be change 
    = value inside a 'string' */
document.querySelector('.btn-roll').addEventListener('click',function(){ /* first argument is a action event and second parameter is a function. in this case we are using an anonymus function */
    if(gameState===true){
        var dice;
        /* Generating a random number */
        dice=Math.floor(Math.random()*6+1);
        /* displaying the dice and setting its value to random generatd no*/
        var diceDoM=document.querySelector('.dice');
        diceDoM.style.display='block';
        diceDoM.src='dice-'+dice+'.png';
        //document.querySelector('#current-'+activePlayer).textContent=dice;
        /* setting the logic of the game */
        if(dice!=1){
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }else{
            nextPlayer();
        }
    }
})
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameState===true){
        scores[activePlayer]=scores[activePlayer]+roundScore; /* Adding Round Score to Global */
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>=100){
    
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('#name-'+activePlayer).textContent='WINNER';
            gameState=false;
            document.querySelector('.dice').style.display='none';
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
    document.querySelector('.dice').style.display='none';

}
document.querySelector('.btn-new').addEventListener('click',function(){
    intialize();
    
})

