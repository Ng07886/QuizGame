let counter = 0;
var myVar;


//game questions
const ques = [
                "The color orange is named after the fruit?",
                "Lighters were invented before matches.",
                "The Spanish national anthem has no words.",
                "Orangutans sleep standing up.",
                "There are more moves in chess than there are atoms in the universe.",
                "We eat an average of 4 house flies (not spiders) in our sleep every year.",
                "In 1966 NASA sent a McDonald's hamburger to space.",
                "It takes 242 trees to make a 200-page book.",
                "A traffic jam in China lasted more than 10 days.",
                "Tomatoes are vegetables."
                ];
//game answers 
const answer = [
                "TRUE",
                "TRUE",
                "TRUE",
                "FALSE",
                "TRUE",
                "FALSE",
                "FALSE",
                "FALSE",
                "TRUE",
                "FALSE"
]

//used to start game
function start(){
//erase past question  
erase('question');
//creat new question
const question = document.createElement('p');
const text = document.createTextNode(ques[counter]);
//append new cuestion to new p element 
question.append(text);
//make it a child of 'question'
document.getElementById('question').appendChild(question);
//turns buttons to true and false 
buttons();
starttimer();
}



function buttons(){
//erasing old buttons
    erase("menu-buttons");
//creating new li elements for the buttons
    const buttonT = document.createElement('li');
    const buttonF = document.createElement('li');
//making them ids
    buttonT.setAttribute("id","true");
    buttonF.setAttribute("id","false");
//creating text node
    const trueB =document.createTextNode("TRUE");
    const falseB= document.createTextNode("FALSE");
//appending them to the li elements 
    buttonT.append(trueB);
    buttonF.append(falseB);
//make them children of menu-buttons 
    document.getElementById("menu-buttons").append(buttonT,buttonF);
//starts timer for question 
    
    
}

//@param id of element that needs to be erased

function erase(name){
   
    var erase = document.getElementById(name);

    while (erase.hasChildNodes()) {  
        erase.removeChild(erase.firstChild);
      }
}

function starttimer(){
    
    myVar = setTimeout(myFunction, 5000);

    if(answer[counter] =='TRUE'){
        
        document.getElementById("true").addEventListener("click",correct);
        
            document.getElementById("false").addEventListener("click",stopT);

    }
    else 
    {
        document.getElementById("false").addEventListener("click",correct);

            document.getElementById("true").addEventListener("click",stopF);
    }
}

//stops event for true
function stopT(){
    
document.getElementById("true").removeEventListener("click",correct);
clearTimeout(myVar);
myFunction();  
}
//stops event for false
function stopF(){
    
    document.getElementById("false").removeEventListener("click",correct);
    clearTimeout(myVar);
    myFunction();  
    }
//if user gets correct answer
function correct(){
    clearTimeout(myVar);
            counter++;
            if (counter==10){
                document.getElementById("false").removeEventListener("click",correct);
                document.getElementById("true").removeEventListener("click",correct);
                document.getElementById("false").removeEventListener("click",stopT);
                document.getElementById("true").removeEventListener("click",stopF);

                win();
            }
            else
            start();

}
//when user gets wrong asnwer
function myFunction(){
   
    //erase past question  
    erase('question');
    //creat new question
    const question = document.createElement('p');
    const text = document.createTextNode("GAME OVER! SCORE: "+ counter+ "/10");
    //append new cuestion to new p element 
    question.append(text);
    //make it a child of 'question'
    document.getElementById('question').appendChild(question);
    reloadPage();
}

//when user wins
function win(){
    erase('question');
    //creat new question
    const question = document.createElement('p');
    const text = document.createTextNode("YOU WIN! SCORE: "+ counter+ "/10");
    //append new cuestion to new p element 
    question.append(text);
    //make it a child of 'question'
    document.getElementById('question').appendChild(question);
}
//used to reload page after user get question wrong 
function reloadPage(){
   
    const reloadP = document.createElement('li');
    reloadP.setAttribute("id","reload");

    const refresh = document.createTextNode("TRY AGAIN");
    reloadP.append(refresh);
    document.getElementById("menu-buttons").append(reloadP);
    
    document.getElementById("reload").addEventListener("click",function(){
        location.reload();
    });


}