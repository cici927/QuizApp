$(document).ready(function() {
	var questions = [{
		question: "1. What was the nick name of the King that ruled before Robert Baratheon?",
		choices: ["a. The Night King", "b. The Mad King", "c. King of The Dragons", "d. The King of The North"],
		qNum: 0,
		correct: 1},
		{
		question: "2. Who was Arya searching for in the House of Black and White?",
		choices: ["a. J'acquen H'gar", "b. Jon Snow", "c. Ned Stark", "d. Gendry"],
		qNum: 1,
		correct: 0},
		{
		question: "3. Complete this sentence: The __________ send their regards.",
		choices: ["a. Starks", "b. Men of Dorne", "c. Kraken", "d. Lannisters"],
		qNum: 2,
		correct: 3},
		{
		question: "4. In season 2, Tyrion defeated Stannis Baratheon in the Battle of The Blackwater using what secret weapon?",
		choices: ["a. Dragons", "b. White walkers", "c. Wildfire", "d. Ned Stark's sword"],
		qNum: 3,
		correct: 2},
		{
		question: "5. What does Jon Snow know?",
		choices: ["a. Who pushed Bran out of the window", "b. Nothing", "c. The truth of who fathered Queen Cersei's children", "d. Where Arya is"],
		qNum: 4,
		correct: 1}]

	var scoreCard = 0;
	var currentQuestion = 0;
	

		
	
	$("#question_wrapper").on("click", "#submit", function () {
		updateSigil();
		var usersChoice = $(".option:checked").val();

		if (usersChoice || usersChoice == "0") {
			checkAnswer(usersChoice);
			currentQuestion++;
			nextQuestion();
		}
		else {
			alert("please answer question")
		}

	});

	$("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        $(".score_sigil").css("display", "none");
        
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        
    });

	function checkAnswer(choice) {
		var userAnswer = choice;
		var correctAnswer = questions[currentQuestion].correct;

		if (userAnswer == correctAnswer) {
			$("#feedback").text("Correct!");
		}
		else {
			$("#feedback").text("Sorry, that's wrong!")
		}
		console.log(correctAnswer);
	};	
		

	

	
	function nextQuestion() {
        if (currentQuestion < 5) {
            $(".questions").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            var newQuestion = '<span class="questions">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><input type="button" id="retry_button" value="Try again!"></div>';
            $("#question_wrapper").html(newQuestion);
        }

        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            if (scoreCard == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+scoreCard+' question.'
                $("#answer_holder").html(finalScore);
                $("#answer_holder").css("text-align", "center")
                $(".questions").remove();
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+scoreCard+' questions.'
                $("#answer_holder").html(finalScore);
                $("#answer_holder").css("text-align", "center")
                $(".questions").remove();
            
            }
        }   
    };   

    function updateSigil() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            scoreCard++;    
        }
        if (scoreCard == 1) {
            $(".score_sigil").css("display", "none")
            $("#q1").fadeIn();
        }
        else if (scoreCard == 2) {
            $(".score_sigil").css("display", "none")
            $("#q1").show()
            $("#q2").fadeIn();
        }
        else if (scoreCard == 3) {
            $(".score_sigil").css("display", "none")
            $("#q1").show()
            $("#q2").show()
			$("#q3").fadeIn();
        }
        else if (scoreCard == 4) {
            $(".score_sigil").css("display", "none")
            $("#q1").show()
            $("#q2").show()
            $("#q3").show()
            $("#q4").fadeIn();
        }
        else if (scoreCard == 5) {
            $(".score_sigil").css("display", "none")
            $("#q1").show()
            $("#q2").show()
            $("#q3").show()
            $("#q4").show()
            $("#q5").fadeIn();
        }
    };
});                

            
           

    
//Choose the answer
	//Click "submit"
	  //Collect answer from user
	  //Confirm answer is valid or selected
	  //Display whether correct or incorrect
	  //Update 
	  //Move to next question
		//Create a function that displays the next question along with its choices
		//Change number of current question thats displayed

	//Move forward through game until completed
	//Click "New Game"




