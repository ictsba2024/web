let q1 = ["What is the primary mode of transmission for the novel coronavirus (SARS-CoV-2)?","Airborne droplets ","Touching contaminated surfaces","Mosquito bites","Sexual contact"];
let q2 = ["Which of the following is a common symptom of COVID-19?","Loss of taste or smell ","Rash ","Sore throat ","Nausea "];
let q3 = ["What is the current global death toll for COVID-19 as of February 24, 2023?","15 million","10 million ","5 million ","1 million "];
let q4 = ["Which of the following activities has been proven to significantly reduce the spread of the novel coronavirus?","Wearing masks","Holding large gatherings ","Not washing hands regularly ","Traveling internationally "];
let q5 = ["What is the name of the first vaccine authorized for emergency use to prevent COVID-19?","Pfizer-BioNTech ","Moderna ","AstraZeneca","Johnson & Johnson"];
let q6 = ["What is the primary mode of transmission for the novel coronavirus (SARS-CoV-2)?","Airborne droplets ","Touching contaminated surfaces","Mosquito bites","Sexual contact"];
let q7 = ["Which of the following is a common symptom of COVID-19?","Loss of taste or smell ","Rash ","Sore throat ","Nausea "];
let q8 = ["What is the current global death toll for COVID-19 as of February 24, 2023?","15 million","10 million ","5 million ","1 million "];
let q9 = ["Which of the following activities has been proven to significantly reduce the spread of the novel coronavirus?","Wearing masks","Holding large gatherings ","Not washing hands regularly ","Traveling internationally "];
let q10 = ["What is the name of the first vaccine authorized for emergency use to prevent COVID-19?","Pfizer-BioNTech ","Moderna ","AstraZeneca","Johnson & Johnson"];
let q11 = ["1What is the primary mode of transmission for the novel coronavirus (SARS-CoV-2)?","Airborne droplets ","Touching contaminated surfaces","Mosquito bites","Sexual contact"];
let q12 = ["1Which of the following is a common symptom of COVID-19?","Loss of taste or smell ","Rash ","Sore throat ","Nausea "];
let q13 = ["1What is the current global death toll for COVID-19 as of February 24, 2023?","15 million","10 million ","5 million ","1 million "];
let q14 = ["1Which of the following activities has been proven to significantly reduce the spread of the novel coronavirus?","Wearing masks","Holding large gatherings ","Not washing hands regularly ","Traveling internationally "];
let q15 = ["1What is the name of the first vaccine authorized for emergency use to prevent COVID-19?","Pfizer-BioNTech ","Moderna ","AstraZeneca","Johnson & Johnson"];
let q16 = ["1What is the primary mode of transmission for the novel coronavirus (SARS-CoV-2)?","Airborne droplets ","Touching contaminated surfaces","Mosquito bites","Sexual contact"];
let q17 = ["1Which of the following is a common symptom of COVID-19?","Loss of taste or smell ","Rash ","Sore throat ","Nausea "];
let q18 = ["1What is the current global death toll for COVID-19 as of February 24, 2023?","15 million","10 million ","5 million ","1 million "];
let q19 = ["1Which of the following activities has been proven to significantly reduce the spread of the novel coronavirus?","Wearing masks","Holding large gatherings ","Not washing hands regularly ","Traveling internationally "];
let q20 = ["1What is the name of the first vaccine authorized for emergency use to prevent COVID-19?","Pfizer-BioNTech ","Moderna ","AstraZeneca","Johnson & Johnson"];

function select(){
        document.querySelector(".start-screen").classList.add("hide");
        document.querySelector(".select-screen").classList.remove("hide");
        humanhp = 5;
        virushp = 25;
        erasercd = 5;
        freezecd = 3;
        skipcd = 4;
        qset = 1;
}
let qset = 1
function start1(){
    document.querySelector(".select-screen").classList.add("hide");
    document.querySelector(".area").classList.remove("hide");
    qan.sort(function(){return 0.5 - Math.random()})
    qbn.sort(function(){return 0.5 - Math.random()})
    display()
}
function start0(){
    document.querySelector(".select-screen").classList.add("hide");
    document.querySelector(".area").classList.remove("hide");
    qan.sort(function(){return 0.5 - Math.random()})
    qbn.sort(function(){return 0.5 - Math.random()})
    qset--
    display()
}

function restart(){
    document.querySelector(".start-screen").classList.remove("hide");
    document.querySelector(".end-screen").classList.add("hide");
    on.sort(function(){return 0.5 - Math.random()});
}
let ans = 0
let virushp = 25
let humanhp = 5

function check(n){
    document.getElementById("choice0").disabled = true;
    document.getElementById("choice1").disabled = true;
    document.getElementById("choice2").disabled = true;
    document.getElementById("choice3").disabled = true;
    if (on[n] == 1 ) {
        virushp = virushp-5;
        document.getElementById("virushp").innerHTML = "Virus hp "+virushp;
        switch(n){
            case 0:
            document.querySelector(".choice0").classList.add("correct");
            break;
            case 1:
            document.querySelector(".choice1").classList.add("correct");
            break;
            case 2:
            document.querySelector(".choice2").classList.add("correct");
            break;
            default:
            document.querySelector(".choice3").classList.add("correct");
        }
    } else {
        humanhp = humanhp-1;
        document.getElementById("humanhp").innerHTML = "Your hp "+humanhp;
        switch(n){
            case 0:
            document.querySelector(".choice0").classList.add("incorrect");
            break;
            case 1:
            document.querySelector(".choice1").classList.add("incorrect");
            break;
            case 2:
            document.querySelector(".choice2").classList.add("incorrect");
            break;
            default:
            document.querySelector(".choice3").classList.add("incorrect");
        }
    }

    setTimeout(
        function(){
        document.querySelector(".choice0").classList.remove("correct");
        document.querySelector(".choice1").classList.remove("correct");
        document.querySelector(".choice2").classList.remove("correct");
        document.querySelector(".choice3").classList.remove("correct");
        document.querySelector(".choice0").classList.remove("incorrect");
        document.querySelector(".choice1").classList.remove("incorrect");
        document.querySelector(".choice2").classList.remove("incorrect");
        document.querySelector(".choice3").classList.remove("incorrect");
        document.getElementById("choice0").disabled = false;
        document.getElementById("choice1").disabled = false;
        document.getElementById("choice2").disabled = false;
        document.getElementById("choice3").disabled = false; 
    next()
    }, 1000);
    on.sort(function(){return 0.5 - Math.random()});
    }
var x = 0;

window.onload = () => {
    x = 0;
    on.sort(function(){return 0.5 - Math.random()});
  };

const on = [1,2,3,4];
const qan = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
const qbn = [q11,q12,q13,q14,q15,q16,q17,q18,q19,q20];
let timer1;
let timer2;
let keep = 0;

let erasercd = 5
let freezecd = 3
let skipcd = 4

function display(){
    document.getElementById("freeze").classList.remove("ready");
    document.getElementById("skip").classList.remove("ready");
    document.getElementById("eraser").classList.remove("ready");
    document.getElementById("choice0").classList.remove("erase");
    document.getElementById("choice3").classList.remove("erase");
    document.getElementById("choice1").classList.remove("erase");
    document.getElementById("choice2").classList.remove("erase");
    document.querySelector(".timer").style.animationName = "none";
    requestAnimationFrame(() => { 
        setTimeout(() => {
            document.querySelector(".timer").style.animationName =""
        },0.01);
    });
    
    if (erasercd < 1) {
        document.getElementById("eraser").disabled = false;
        document.getElementById("eraser").classList.add("ready");
        erasercd = ""
    } else {
        document.getElementById("eraser").disabled = true;
    }
    if (freezecd < 1) {
        document.getElementById("freeze").disabled = false;
        document.getElementById("freeze").classList.add("ready");
        freezecd = ""
    } else {
        document.getElementById("freeze").disabled = true;
    }
    if (skipcd < 1) {
        document.getElementById("skip").disabled = false;
        document.getElementById("skip").classList.add("ready");
        skipcd = ""
    } else {
        document.getElementById("skip").disabled = true;
    }

    document.getElementById("eraser").innerHTML = '<img src="../multimedia/quizgame/eraser.png" height="50px">' + erasercd;
    document.getElementById("freeze").innerHTML = '<img src="../multimedia/quizgame/freeze.png" height="50px">' + freezecd;
    document.getElementById("skip").innerHTML = '<img src="../multimedia/quizgame/skip.png" height="50px">' + skipcd;
    document.getElementById("virushp").innerHTML = "Virus hp "+virushp
    document.getElementById("humanhp").innerHTML = "Your hp "+humanhp
    switch (qset) {
        case 1:
            document.getElementById("question").innerHTML = qan[x][0];
            document.getElementById("choice0").innerHTML = qan[x][on[0]];
            document.getElementById("choice1").innerHTML = qan[x][on[1]];
            document.getElementById("choice2").innerHTML = qan[x][on[2]];
            document.getElementById("choice3").innerHTML = qan[x][on[3]];
            document.getElementById("virusimage").innerHTML = "<img src='../multimedia/quizgame/covid19.png' alt='Covid-19' width=250px'>";
            break;
    
        default:
            document.getElementById("question").innerHTML = qbn[x][0];
            document.getElementById("choice0").innerHTML = qbn[x][on[0]];
            document.getElementById("choice1").innerHTML = qbn[x][on[1]];
            document.getElementById("choice2").innerHTML = qbn[x][on[2]];
            document.getElementById("choice3").innerHTML = qbn[x][on[3]];
            document.getElementById("virusimage").innerHTML = "<img src='../multimedia/quizgame/flu.png' alt='Flu' width='250px'>";
            break;
    }
       
    timer1 = setTimeout("keeper()", 30000);
}
function keeper(){
    
    switch (keep) {
        case 1:
            humanhp = humanhp-1;
            keep = 0
            timer2 = setTimeout("next()", 10000);
            break;
    
        default:
            humanhp = humanhp-1;
            next()
            break;
    }

    
}

function freeze(){
    document.getElementById("timer").style.animationPlayState = "paused";
    setTimeout(() => {document.getElementById("timer").style.animationPlayState = "running"}, 10000);
    keep = 1;
    freezecd = 4;
    document.getElementById("freeze").disabled = true;
    document.getElementById("freeze").classList.remove("ready");
    document.getElementById("freeze").innerHTML = '<img src="../multimedia/quizgame/freeze.png" height="50px">' + freezecd;
}

function skip(){
    x++;
    clearInterval(timer1);
    timer1 = null;
    clearInterval(timer2);
    timer2 = null;
    skipcd = 5;
    document.getElementById("skip").disabled = true;
    document.getElementById("skip").classList.remove("ready");
    display(); 
    document.getElementById("skip").innerHTML = '<img src="../multimedia/quizgame/skip.png" height="50px">' + skipcd;
}

function eraser(){
    if(on[0] == 1 || on[3] == 1 ){
        document.getElementById("choice1").classList.add("erase");
        document.getElementById("choice2").classList.add("erase");
    } else {
        document.getElementById("choice0").classList.add("erase");
        document.getElementById("choice3").classList.add("erase");
    }
    erasercd = 6;
    document.getElementById("eraser").disabled = true;
    document.getElementById("eraser").classList.remove("ready");
    document.getElementById("eraser").innerHTML = '<img src="../multimedia/quizgame/eraser.png" height="50px">' + erasercd;
}


function next(){
    if (humanhp == 0) {
        document.querySelector(".end-screen").classList.remove("hide");
        document.querySelector(".area").classList.add("hide");
        x = 0;   
        document.getElementById("finalscore").innerHTML = "Game over!";
        document.getElementById("finalimage").innerHTML = '<img class="test" src="../multimedia/quizgame/positive.png">';
    } else {
        if (virushp == 0) {
            document.querySelector(".end-screen").classList.remove("hide");
            document.querySelector(".area").classList.add("hide");
            x = 0;   
            document.getElementById("finalscore").innerHTML = "You have defected the virus!";
            document.getElementById("finalimage").innerHTML = '<img class="test" src="../multimedia/quizgame/negative.png">';
        } else {
            x++;
            erasercd--;
            freezecd--;
            skipcd--;
            clearInterval(timer1);
            timer1 = null;
            clearInterval(timer2);
            timer2 = null;
            display(); 
        }
        
    }
}



