//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
let que_count = 0;
var arr ;
var randomIndexArray ;
var randomIndex ;
let timeValue =  15;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    localStorage.setItem("calledTime", 1);
    userScore = 0;
    que_count = 0;
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
localStorage.setItem("calledTime", 1);
que_count = 0;
}


// if continueQuiz button clicked
continue_btn.onclick = () => {
    
    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    randomIndexArray = shuffle(arr);
    randomIndex = randomIndexArray[0];
    que_count = 0;

    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(randomIndexArray[que_count]); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}



// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    localStorage.setItem("calledTime", 1);
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {

    timeCount.textContent = "15";
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(randomIndexArray[que_count]); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        
    }

    return array;
}



// getting questions and options from array
function showQuetions(index) {

    var calledTimes;
    var x = localStorage.getItem("calledTime");
    if (x == "") {
        calledTimes = 1;
    }
    else if (x > questions.length ) {
        calledTimes = 1;
    }
    else {
        calledTimes = x;
    }


    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index


    var Ansarr = [0, 1, 2, 3]
    AnswerArray = shuffle(Ansarr);


    let que_tag = '<span>' + calledTimes + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[AnswerArray[0]] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[AnswerArray[1]] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[AnswerArray[2]] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[AnswerArray[3]] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }


    calledTimes++;
    localStorage.setItem("calledTime", calledTimes);
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    //clearInterval(counter); //clear counter
    //clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[randomIndexArray[que_count]].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    option_list.children[0].classList.remove("option_list");
    option_list.children[1].classList.remove("option_list");
    option_list.children[2].classList.remove("option_list");
    option_list.children[3].classList.remove("option_list");

    answer.classList.add("option_list");


    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        //upgrading score value with 1
	var y = localStorage.getItem("CurrentAnswer");
	if(y!=userAns)
	{
	 userScore += 1; 
        }
	localStorage.setItem("CurrentAnswer", userAns);

        //answer.classList.add("correct"); //adding green color to correct selected option
        //answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        //console.log("Correct Answer");
        //console.log("Your correct answers = " + userScore);


    } else {
       localStorage.setItem("WrongAnswer", userAns);
        //answer.classList.add("incorrect"); //adding red color to correct selected option
        //answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        //console.log("Wrong Answer");

        //for(i=0; i < allOptions; i++){
        //    if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
        //        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        //        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        //        console.log("Auto selected correct answer.");
        //    }
        //}
    }
    //for(i=0; i < allOptions; i++){
    //    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    //}
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > questions.length)
    {
      userScore = questions.length;
    }
    if (userScore > 17){ // if user scored more than 17
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Congratulations!, You are an Expert!, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; You got '+ userScore +' out of '+ questions.length +'</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 12){ // if user scored more than 12
        let scoreTag = '<span>and Good going, You are an Intermediate,  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; You got '+ userScore +' out of '+ questions.length +'</span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Apologize,You are a Beginner, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  You got only '+ userScore +' out of '+ questions.length +'</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
 debugger
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
	
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
			debugger
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[randomIndexArray[que_count]].answer; //getting correct answer from array
			
			let WrongAnsweer = localStorage.getItem("WrongAnswer");
            for(i=0; i < allOptions; i++){
			
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
          }
			
			
			  for(i=0; i < allOptions; i++){
			
              if(option_list.children[i].textContent == WrongAnsweer){
					
				 option_list.children[i].setAttribute("class", "option incorrect"); //adding green color to matched option
                 option_list.children[i].insertAdjacentHTML("beforeend", crossIconTag);
			
				}
            }
			
			
			
			
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }

            if (que_count >= questions.length) {
                showResult();
            }
            else {
                next_btn.classList.add("show"); //show the next button if user selected any option

            }
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span>Question - <p>' +  index +'</p> of <p>'+ questions.length +'</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}