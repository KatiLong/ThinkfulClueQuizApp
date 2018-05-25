'use strict';

// Array that stores all Quiz Data
//class quizPage {
//    constructor(question, choices, correct) {
//        this.question = question;
//        this.choices = choices;
//        this.correct = correct;
//    }
//
//    speak() {
//        console.log(`${this.name} makes a noise`);
//    }
//}
const quizContent2 = [
    {
        question: '"One Plus Two Plus Two Plus One…." How many bullets are left in the gun?',
        choices: ['1', '2', '3', '0'],
        correct: '1',
        gifs: {
            src: 'https://78.media.tumblr.com/80fb6e1e9571fb5b16fbd724b955bf89/tumblr_p1jq7vb1eS1sqr9zvo7_r1_400.gif',
            alt: "There's only one shot that got that chandelier. That's one plus two plus ONE plus one."
        }
    },
    {
        question: 'Finish this Quote: "Communism is just a ..." ',
        choices: ['red flag', 'red herring', 'tea kettle', 'singing telegram'],
        correct: 'red herring',
        gifs: {
            src: 'https://media.giphy.com/media/6JpaIdpgg5iO4/giphy.gif',
            alt: 'It’s a free country, don’t you know that?'
        }
    },
    {
        question: '',
        choices: [],
        correct: '',
        gifs: {}
    },
    {
        question: '',
        choices: [],
        correct: '',
        gifs: {}
    },
    {
        question: '',
        choices: [],
        correct: '',
        gifs: {}
    },
    {
        question: '',
        choices: [],
        correct: '',
        gifs: {}
    },
    {
        question: '',
        choices: [],
        correct: '',
        gifs: {}
    },
    {
        question: '',
        choices: [],
        correct: '',
        gifs: {}
    },
    {
        question: '',
        choices: [],
        correct: '',
        gifs: {}
    },
    {
        question: '',
        choices: [],
        correct: '',
        gifs: {}
    }
];
const quizContent = {
    questions: [
    '"One Plus Two Plus Two Plus One…." How many bullets are left in the gun?',
    'Finish this Quote: "Communism is just a ..." ',
    'Who is easily startled and claims “I didn’t do it!” throughout the movie?',
    'What did they eat at dinner?',
    'Who failed to keep a “long story short” throughout the movie?',
    'Who killed Wadsworth?',
    'What’s in Mr. Boddy’s bag?',
    'How many husbands did Mrs. White have?',
    'Who calls the house?',
    'In all three endings, who is never a murderer?'
  ],
    choices: [
    ['1', '2', '3', '0'],
    ['red flag', 'red herring', 'tea kettle', 'singing telegram'],
    ['Miss Scarlett', 'Mr Green', 'Professor Plum', 'Mr Boddy'],
    ['pea soup', 'meatloaf', 'monkey’s brains', 'roast chicken'],
    ['Mr Green', 'Mrs White', 'Yvette', 'Wadsworth'],
    ['Mr. Green, In the Hall, with the Revolver', 'Colonel Mustard, Billard Room, with the Candlestick', 'Mrs Peacock, Library, with the Rope', 'Mrs. White, Study, with the lead pipe'],
    ['Surprises', 'Weapons', 'Flowers', 'Surprises and Weapons'],
    ['6', '5', '3', '2'],
    ['The Prime Minister', 'The President', 'J Edgar Hoover', 'Tim Curry'],
    ['Mrs Scarlett', 'Mrs Peacock', 'Mrs White', 'The Cook']
  ],
    correct: ['1', 'red herring', 'Mr Green', 'monkey’s brains', 'Wadsworth', 'Mr. Green, In the Hall, with the Revolver', 'Surprises and Weapons', '5', 'J Edgar Hoover', 'The Cook'],
    gifs: [
        {
            src: 'https://78.media.tumblr.com/80fb6e1e9571fb5b16fbd724b955bf89/tumblr_p1jq7vb1eS1sqr9zvo7_r1_400.gif',
            alt: "There's only one shot that got that chandelier. That's one plus two plus ONE plus one."
  },
        {
            src: 'https://media.giphy.com/media/6JpaIdpgg5iO4/giphy.gif',
            alt: 'It’s a free country, don’t you know that?'
  },
        {
            src: 'https://media.giphy.com/media/12520JoXrCw3C/giphy.gif',
            alt: 'Dinner gong rung by The Cook'
  },
        {
            src: 'https://78.media.tumblr.com/3c7d956718099422c98a34e799268600/tumblr_ocvq82JM5F1qz7otto8_400.gif',
            alt: "Clue dinner guests sipping soup"
  },
        {
            src: 'https://78.media.tumblr.com/ed747e4423f415de5cce9ea8b332daa8/tumblr_o6v4funfbV1rdutw3o1_400.gif',
            alt: "Wadsworth with gun: 'I choose to expose myself'"
  },
        {
            src: 'https://78.media.tumblr.com/tumblr_m7qe5ap6Oq1qakh43o1_500.gif',
            alt: "Mr Green dramatically shooting Wadsworth"
  },
        {
            src: 'https://78.media.tumblr.com/f63dc98017e9abc6e78c2ef311babc7f/tumblr_otw2ruUN961r3ix26o5_400.gif',
            alt: "Close up of the Candlestick being unwrapped"
  },
        {
            src: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-10/enhanced/webdr06/21/14/anigif_enhanced-buzz-12971-1382379072-0.gif?downsize=715:*&output-format=auto&output-quality=auto',
            alt: "Mrs White: 'Husbands should be like kleenex...'"
  },
        {
            src: 'https://media.giphy.com/media/eZPCBQegqOIjC/giphy.gif',
            alt: "Wadsworth running through the hall yelling: 'I’ll tell you how it happened!'"
  },
        {
            src: 'https://78.media.tumblr.com/3b207dbfd3b837cf0905b582b539b428/tumblr_ocvq82JM5F1qz7otto10_400.gif',
            alt: "The cook sharpening a knife and wielding it towards Wadsworth"
  }]
};

let currentInd = 0;
let currentScore = 0;


// load next set of question and answers
function loadQuestion() {
    $('main').html(`

    <div class="info-bar">
      <div class="col-2">
        <span class="number">Question ${currentInd + 1} of 10</span>
      </div>
      <div class="col-2">
        <span class="score">Score <span class="score-box">${currentScore}</span></span>
      </div>
    </div>

    <form class="js-quiz-form">

        <fieldset name="possible-answers" class="quiz-text">

          <legend>${quizContent.questions[currentInd]}</legend>

          <input type="radio" name="answer" id="answer1" required value ="${quizContent.choices[currentInd][0]}">
          <label for="answer1">${quizContent.choices[currentInd][0]}</label>
          <br>
          <input type="radio" name="answer" id="answer2" required value="${quizContent.choices[currentInd][1]}">
          <label for="answer2">${quizContent.choices[currentInd][1]}</label>
          <br>
          <input type="radio" name="answer" id="answer3" required value="${quizContent.choices[currentInd][2]}">
          <label for="answer3">${quizContent.choices[currentInd][2]}</label>
          <br>
          <input type="radio" name="answer" id="answer4" required value="${quizContent.choices[currentInd][3]}">
          <label for="answer4">${quizContent.choices[currentInd][3]}</label>
          <br>
        </fieldset>

        <div class="wrapper">
          <button type="submit" id="answer-button"><img src="https://i.lensdump.com/i/M188D.jpg" id="submit-img" alt="Clue Answer"></button>
        </div>
    </form>`);
    currentInd++;
}

// popup gif according to right or wrong answer, tally score
function answerChoice(sel) {
    // console.log(`The correctAnswer function ran. The selected answer was: ${selectAns}`);
    // console.log(`The correct answer was: ${quizContent.correct[currentInd - 1]}`);
    // console.log(`current correct answer: ${quizContent.correct[currentInd-1]}`);
    // console.log(`sel is ${sel}`);

    if (sel === quizContent.correct[currentInd - 1]) {
        console.log("The answer was correct");
        correctAnswer();
        currentScore++;

    } else {
        wrongAnswer();
        console.log("The answer was incorrect");
    }
}

function correctAnswer() {
    console.log(`The correctAnswer function ran`);
    $('body').append(`
    <div class="overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
        <h2>Correct!</h2>
        <div class="gif-container">
          <img src="https://78.media.tumblr.com/017a05d490a72db49f457e06e455acbb/tumblr_om53r2LXYL1qms0wao3_500.gif" alt="Correct answer GIF - 'I am merely a humble butler...'" class="popup-gif">
        </div>
      </div>
    </div>`);
    $('.close').click(function () {
        $('.overlay').remove();
    })
}

function wrongAnswer() {
    console.log(`The wrongAnswer function ran`);
    console.log(`${quizContent.gifs[currentInd - 1].alt}`);
    $('body').append(`
    <div class="overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
        <h2>I'm so sorry, that is not correct.</h2>
        <div class="gif-container">
          <img src=${quizContent.gifs[currentInd - 1].src} alt="${quizContent.gifs[currentInd - 1].alt}" class="popup-gif">
        </div>
        <span id="correct-answer">The correct answer is ${quizContent.correct[currentInd - 1]}</span>
      </div>
    </div>`);
    $('.close').click(function () {
        $('.overlay').remove();
    })
}

// if submit button is pushed with no selection made
function selectionRequired() {
    console.log('The selectionRequired function ran');
    //popup selection required gif
    $('body').append(`
    <div class="overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
        <h2>Please, pick an answer.</h2>
        <div class="gif-container">
          <img src="https://media.giphy.com/media/lH6mJIKkCwQo0/giphy.gif" alt="Please make a selection GIF - Mrs. White is fed up" class="popup-gif">
        </div>
      </div>
    </div>`);
    $('.close').click(function () {
        $('.overlay').remove();
    })

}

// load the final score page to the screen
function finalScorePage() {
    $('header').hide();
    $('main').html(`
    <div class="score-page">

        <div id= "score-bar">
          <div class="col-2 final-score">Final Score ${currentScore} out of 10</div>
          <div class="col-2">
            <button type="button" id="restart-quiz-button">Restart Quiz</button>
          </div>
        <div>
        <img src="http://media.tumblr.com/160d74e4cdfe7a85177d89a4fdfe9e45/tumblr_n2r7yrKSVR1rqrh0yo1_1280.jpg" alt="Black and White Cast Photo" class="final-img-2">
    </div>`);
}

function restartQuiz() {
    $('body').on('click', '#restart-quiz-button', function (event) {
        event.preventDefault();
        window.location.reload(true);
    })
}

function perfectScore() {
    console.log("The perfectScore function ran")
    $('body').append(`
    <div class="overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
        <h2>You know too much. A <i>perfect<i> score.</h2>
        <div class="gif-container">
          <img src="https://78.media.tumblr.com/200d6ebe9fbeaf6ed7fcd8bed8c7a2e5/tumblr_otw2ruUN961r3ix26o1_400.gif" alt="Concerned faces in the dark" class="popup-gif">
        </div>
      </div>
    </div>`);
    $('.close').click(function () {
        $('.overlay').remove();
    })
}

function startPage() {
    //on document ready, render startPage div
    // console.log(`The startPage function ran`);
    $('main').html(`
      <div class="start-page">
        <button type="button" id="start-button">
          <span>Begin Quiz</span>
        </button>
      </div>
    `);
}

// Listen for the Start Quiz button to be clicked
function startQuiz() {
    $('body').on('click', '#start-button', function () {
        // console.log(`The startQuiz function ran`);
        $('header').show();
        loadQuestion();
    })
}

// Listen for submit button on quiz page to be clicked & run correctAnswer/nextQuestion
function submitQuestion() {

    $('body').on('click', '#answer-button', function (event) {
        event.preventDefault();
        let selectAns = $('input[name=answer]:checked', '.js-quiz-form').val();

        //If no answer is selected, prompt User
        if (!selectAns) {
            // console.log('selection is required');
            selectionRequired(selectAns);
        } else if (currentInd < 10) {
            answerChoice(selectAns);
            loadQuestion();
        }
        //After all questions have been asked, Final Score Page is loaded
        else {
            answerChoice(selectAns);
            if (currentScore === 10) {
                $('.close').click((event) => perfectScore())
            }
            finalScorePage();
            // console.log('Current index is higher than 10');
        }
    })

    let selectAns = ``;
}

// Where all functions will be invoked
function renderPage() {
    startPage();
    startQuiz();
    submitQuestion();
    restartQuiz();
}

// document ready function
$(renderPage());
