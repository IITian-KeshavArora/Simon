let colors = document.querySelectorAll('.gameColor');
let audio = document.querySelector('#clicksound');
let body = document.querySelector('body');
let h2 = document.querySelector('h2');
let highScore = document.querySelector('#highestScore');
let hightestLevel = [];
let gameBuzzer = document.querySelector('#gameOver');

// setting values of colors

let red = 'rgba(255,0,0,0.8)';
let green = 'rgba(0,255,0,0.8)';
let blue = 'rgba(0,0,255,0.8)';
let yellow = 'rgba(255,255,0,0.8)';

colors.forEach (color => {
    color.addEventListener('click', function()
    {
        audio.play();
    })
})

let gameSeq = [];
let level = 1;
let start = true;

function HandleEvent()
{
    if(start == true)
    {
        let randomColor = Math.floor(Math.random()*4+1);
        let initialColor = colors[randomColor-1].style.backgroundColor;
        gameSeq.push(initialColor);
        colors[randomColor-1].style.backgroundColor = '#A020F0';
        setTimeout(function()
        {
            colors[randomColor-1].style.backgroundColor = initialColor;
        }, 500)
       h2.innerText = `Level - ${level}`;
       start = false;
    }
}



body.addEventListener('click', HandleEvent);
body.addEventListener('keypress', HandleEvent);


let redbtn = document.querySelector('#red');
let bluebtn = document.querySelector('#blue');
let greenbtn = document.querySelector('#green');
let yellowbtn = document.querySelector('#yellow');

let userInputs = [];

let btns = [redbtn, bluebtn, greenbtn, yellowbtn];
for(let button of btns)
{
    button.addEventListener('click', function()
    {
        btnColor = this.style.backgroundColor;
        button.style.backgroundColor = 'white';
        setTimeout(function()
        {
            button.style.backgroundColor = btnColor;
        },200);
        userInputs.push(btnColor);
        setTimeout(check, 250);
    })

}

function levelUp()
{
    level++;
    userInputs = [];
    flash();
    h2.innerText = `Level - ${level}`;
}

function flash()
{
    let randomColor = Math.floor(Math.random()*4+1);
    let initialColor = colors[randomColor-1].style.backgroundColor;
    gameSeq.push(initialColor);
    colors[randomColor-1].style.backgroundColor = '#A020F0';
    setTimeout(function()
    {
        colors[randomColor-1].style.backgroundColor = initialColor;
    }, 500)
}

function check()
{
    for(let i =0; i<userInputs.length; i++)
    {
        if(userInputs[i] != gameSeq[i])
        {
            h2.innerHTML = `Wrong Press!! Game Over... Your Score was ${level-1} <br>Press any key to restart.`;
            hightestLevel.push(level-1);
            highScore.innerText = `Highest Score - ${Math.max(...hightestLevel)}`;
            gameBuzzer.play();
            start = true;
            userInputs=[];
            gameSeq = [];
            level = 1;
            break;
        }
    }
    if(gameSeq.length != 0)
    {
        if(userInputs.length == gameSeq.length)
        {
            levelUp();
        }
    }

    i = 0;
}







