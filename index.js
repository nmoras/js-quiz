var questionIndex = 0;

        const quizQuestions = [
                        {question: "The capital city of Canada is",
                        answers: 
                        [
                          {text: "Montreal", correct: false},
                          {text: "Ottawa", correct: true},
                          {text: "Toronto", correct: false},
                          {text: "Vancouver", correct: false}
                        ]

                    },
                    {question: "The largest city in Canada is",
                    answers:
                    [
                          {text: "Quebec", correct: false},
                          {text: "Vancouver", correct: false },
                          {text: "Montreal", correct: false},
                          {text: "Toronto", correct: true}
                  ]    
                    },
                    {question: "Canada has _____ provinces",
                    answers:  
                    [  
                        {text: "10", correct: true},
                        {text: "15", correct: false},
                        {text: "20", correct: false},
                        {text: "25", correct: false}
                  ]
                    },
                    {question: "The smallest province in Canada is",
                    answers:
                    [
                        {text: "Nova Scotia", correct: true},
                        {text: "Quebec", correct: false},
                        {text: "Prince Edward Island", correct: false}, 
                        {text: "Alberta", correct: false}
                  ]      
                    },
                    {question: "The first inhabitants of Canada were the",
                    answers:
                    [
                        {text: "Vikings", correct: false},
                        {text: "Native people", correct: true},
                        {text: "French", correct: false},
                        {text: "English", correct: false}
                  ]      
                    },
                    {question: "The plant which is a symbol of Canada is",
                    answers:
                    [
                             {text: "the maple leaf", correct: true} ,
                             {text: "the oak leaf", correct: false} ,
                             {text: "the Nootka rose", correct: false},
                              {text: "Purple Prairie", correct: false}
                  ]     
                    },
                    {question: "Name Canada’s highest mountain",
                          answers:
                         [ 
                          {text: "Mount Logan", correct: true},
                          {text: "Mont Tremblant", correct: false},
                          {text: "Whistler Mountain", correct: false},
                          {text: "Mount Waddington", correct: false}
                  ]     
                    },
                    {question: "What is the capital of Ontario",
                    answers:
                    [
                          {text: "Ottawa", correct: true},
                          {text: "Toronto", correct: false},
                          {text: "Hamilton", correct: false},
                          {text: "Niagara", correct: false}
                  ]     
                    },
                    {question: "Which province has the largest population",
                    answers:
                    [
                         { text: "Quebec", correct: false},
                         { text: "Ontario", correct: true}, 
                         {text: "British Columbia", correct: false} ,
                         {text: "Alberta", correct: false} 
                  ]     

                    },
                    {question: "What is the most popular sport in Canada",
                    answers:
                    [
                        {text: "Curling", correct: false},
                        { text: "Golf", correct: false},
                        {text: "Ice Hockey", correct: true},
                        {text: "Basketball", correct: false}
                  ]     
                    }   
        ]
    //-----------------------------                
    //creating element to show quiz on the oafe
            
            // document.body.appendChild('qdiv');
            // var qHeading = document.createElement('h3');
            // qdiv.appendChild('h2');
            // var qchoices = document.
            
    //-------------------------------------                
            var mainEl = document.querySelector(".main");
            var scoreDiv = document.querySelector(".score-sub");
            var submitEl = document.querySelector("#subBtn");
            var score = 0;
            var secondsLeft = 60;
            var quizEl = document.getElementById("quiz-div");
            var qEl = document.getElementById("question");
            var ansEl = document.getElementById("answerbtn");
            var subMain = document.querySelector(".main-sub");
            var datastore = document.querySelector(".datastore")
            subMain.classList.add('hide'); 
            scoreDiv.classList.add('hide') ;
            rightAns.classList.add('hide');
            datastore.classList.add('hide'); 
            var timeEl = document.getElementById("timer");    
            var scoreEl = document.getElementById("score");
            var fScoreEl = document.getElementById("fScore");
            var intialEl = document.getElementById("playerInitial");
            var intialEltxt = intialEl.value;
            var rightAnsEl = document.getElementById("rightAns");
            var userDetailIn = document.getElementById("userDetailIn");
            var userDetailSc = document.getElementById("userDetailSc");
            var userdetails = document.getElementById("userDetails");
            var timerInterval;
            var userData;
            //-------------------
                       
            //--------------
            submitEl.addEventListener("click", startQuiz);

      function startQuiz(){
            console.log(`i am clicked`);
            mainEl.classList.add('hide');
            subMain.classList.remove('hide');
            scoreDiv.classList.add('hide');
            rightAns.classList.add('hide');
            datastore.classList.add('hide');  
           
            showQuestion(questionIndex);
            setTime();
                          
      }

      //-----------
      function showQuestion(i)  {
                  ansEl.innerHTML = '';
                  //empty ansEl 
                  var userAnswer = '';
                  qEl.textContent = quizQuestions[i].question;

                  quizQuestions[i].answers.forEach( answer => {
                  var button = document.createElement('button');
                  button.textContent = answer.text;
                  button.setAttribute("class", "quizbtn mb-3 pr-5 pl-5");
                  if (answer.correct){
                        button.dataset.correct = answer.correct          
                  }
                  button.addEventListener('click', selectAns);
                  ansEl.appendChild(button);
                  
                  //everything is on the screen
                  //wait and check for the user's answer
                  //have a variable that stores current question 
                  //example, you start with var question = 0;

            } );
 
      } ;
        
   function selectAns(e){
      console.log(`we are in question ${questionIndex}`);
      questionIndex++;
      if( questionIndex === 10 ){
            console.log(`array length is ${questionIndex}`)
            
           return endGame();
      }
      console.log(`we are going to the next one which is ${questionIndex}`);
      console.log(`array length is ${questionIndex}`)
      //do things like add score or show the user that he is correct
      showQuestion(questionIndex);

     
     //user clicked an answer, so you increase question ++ 
      //when question is increased, you go to the next set of questions
      // showQuestion();
      rightAns.classList.remove('hide')  
      if(e.target.dataset.correct == "true"){

            
            scoreBoard();
      // showLine();
            rightAnsEl.textContent = "Correct";
            rightAnsEl.setAttribute("class", "right")
      } else{
            rightAnsEl.textContent = "Wrong";
            rightAnsEl.setAttribute("class", "wrong")
            secondsLeft = secondsLeft - 5;
      }
      console.log(`the target is ${e.target.dataset.correct} and socre is ${score}`);

   }

   

   function setTime() {
      timerInterval = setInterval( function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
          endGame();
      }
      
      
}, 1000);
};

function scoreBoard(){
      score = score + 5;
      scoreEl.textContent = score;
      fScoreEl.textContent = score;
};

// function showLine(){}

function endGame(){
      clearInterval(timerInterval);
      
      console.log("Endgame reached");

      subMain.classList.add('hide');
      rightAns.classList.add('hide');
      scoreDiv.classList.remove('hide'); 
      datastore.classList.add('hide');

}

function submitFn(e){
      e.preventDefault();
     
            intialEl = document.getElementById("playerInitial");
            intialEltxt = intialEl.value;

         
        if(intialEltxt == "")   {
              
              alert('enter your initials');
              return;
        } else
        {
            let key = intialEltxt;
            let value = score;
            console.log(key);
            console.log(value);

            localStorage.setItem(key, value);
            datastore.classList.remove('hide')
            subMain.classList.add('hide');
            rightAns.classList.add('hide');
            scoreDiv.classList.add('hide'); 
        
        for( let i = 0; i < localStorage.length; i++){

            key = localStorage.key(i);
            value = localStorage.getItem(key);

            userdetails.innerHTML += `<div class="datastore-text p-2 text-center"> ${key}. <span class="datastore-text p-2"> ${value}  </span></div>`; 
            
        };
      };
}

function clearStorageFn() {
      localStorage.clear();
}
function restartFn(){
      

}
   
//-----------
//firs check if its correct and add or subtract score
//then go to next question
// showQuestions()


    //---------------------------------------
