// Array that stores all Quiz Data
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
    ['Mr Green','Mrs White','Yvette','Wadsworth'],
    ['Mr. Green, In the Hall, with the Revolver', 'Colonel Mustard, Billard Room, with the Candlestick','Mrs Peacock, Library, with the Rope', 'Mrs. White, Study, with the lead pipe'],
    ['Surprises','Weapons', 'Flowers', 'Surprises and Weapons'],
    ['6','5', '3', '2'],
    ['The Prime Minister','The President','J Edgar Hoover','Tim Curry'],
    ['Mrs Scarlett', 'Mrs Peacock', 'Mrs White', 'The Cook']
  ],
  correct: ['1', 'red herring', 'Mr Green', 'monkey’s brains', 'Wadsworth', 'Mr. Green, In the Hall, with the Revolver', 'Surprises and Weapons', '5', 'J Edgar Hoover', 'The Cook'],
  clue: [{
    text: `The gun holds 6 bullets`,
    img: `<img src="https://media.giphy.com/media/Y5I1Kwy547XSo/giphy.gif" alt="He wasn't a very good illusionist" class="popup-gif">`}]
  };

  let currentInd = 0;
  let currentScore = 0;


function startPage() {
  //on document ready, render startPage div
  // console.log(`The startPage function ran`);
  $('body').html(`
    <div class="start-page">
      <button type="button" id="start-button">
        <span>Begin Quiz</span>
      </button>
    </div>
    `);
}



// Listen for the Start Quiz button to be clicked
function startQuiz () {
  $('body').on('click', '#start-button', function (){
  // console.log(`The startQuiz function ran`);
  //When clicked, appending the html in the main section
  $('body').html(`
    <header role="banner">

      <img src="https://i.lensdump.com/i/n76ka.jpg" alt="Clue Logo" class="logo">
      <h2>The Movie Quiz</h2>
      <p id="subtitle">More GIF's than there are Endings</p>

    </header>
    <main role="main"></main>
    `);
  loadQuestion();
  // submitQuestion();
  })
}

// Listen for submit button on quiz page to be clicked & run correctAnswer/nextQuestion
function submitQuestion () {

  $('body').on( 'click', '.form-button', function (event){
    event.preventDefault();
    let selectAns = $('input[name=answer]:checked', '.js-quiz-form').val();

    console.log(selectAns);
    // console.log(`The submitQuestion function ran`);
    console.log(quizContent.correct[currentInd-1])


    if (!selectAns) {
      console.log('selection is required');
      selectionRequired(selectAns);
    } else if (currentInd < 10) {
      selectedAnswer(selectAns);
      loadQuestion();
      console.log('There are still more questions');
    }
    //After all questions have been asked, Final Score Page is loaded
    else {
      selectedAnswer(selectAns);
      finalScorePage();
      console.log('Current index is higher than 10');
    }
  })

  let selectAns = ``;
}

// popup gif according to right or wrong answer, tally score
function selectedAnswer (sel){
  // console.log(`The correctAnswer function ran. The selected answer was: ${selectAns}`);
  // console.log(`The correct answer was: ${quizContent.correct[currentInd - 1]}`);
  console.log(`current correct answer: ${quizContent.correct[currentInd-1]}`);
  console.log(`sel is ${sel}`);

  if (sel === quizContent.correct[currentInd-1]) {
    console.log("The answer was correct");
    correctAnswer();
    currentScore++;

  } else {
    wrongAnswer();
    console.log("The answer was incorrect");
  }
  // if input === ${quizContent.correct[currentInd]} popup correct GIF, currentScore++
  // otherwise (if false) popup incorrect GIF
}

function correctAnswer() {
  console.log(`The correctAnswer function ran`);
  $('body').append(`
    <div class="overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
        <h2>Correct!</h2>
        <img src="https://78.media.tumblr.com/017a05d490a72db49f457e06e455acbb/tumblr_om53r2LXYL1qms0wao3_500.gif" alt="Correct answer GIF - 'I am merely a humble butler...'" class="popup-gif">
      </div>
    </div>`);
  $('.close').click(function () {
    $('.overlay').remove();
  })
}

function wrongAnswer () {
  console.log(`The wrongAnswer function ran`);
  $('body').append(`
    <div class="overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
        <h2>I'm so sorry, that is not correct.</h2>
        <img src="https://m.popkey.co/fd87c4/qdp1D.gif" alt="Wrong answer GIF" class="popup-gif">
      </div>
    </div>`);
  $('.close').click(function () {
    $('.overlay').remove();
  })
}

// if submit button is pushed with no selection made
function selectionRequired(){
  console.log('The selectionRequired function ran');
  //popup selection required gif
  $('body').append(`
    <div class="overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
        <h2>Please, pick an answer.</h2>
        <img src="https://media.giphy.com/media/lH6mJIKkCwQo0/giphy.gif" alt="Please make a selection GIF - Mrs. White is fed up" class="popup-gif">
      </div>
    </div>`);
  $('.close').click(function () {
    $('.overlay').remove();
  })

}

// load next set of question and answers
// button under construction
// <button type="button" id="clue-button"><img src="http://clipground.com/images/clue-clipart-2.jpg" id="mg-img" alt="Click here for a clue"></button>
function loadQuestion () {
  console.log(`The loadQuestion function ran & currentInd is: ${currentInd}`);
  $('main').html(`
    <form class="js-quiz-form">

        <section class="quiz-text">

          <h3>${quizContent.questions[currentInd]}</h3>

          <input type="radio" name="answer" id="answer1" required value ="${quizContent.choices[currentInd][0]}">
          <label for="answer1">${quizContent.choices[currentInd][0]}</label>
          <br>
          <input type="radio" name="answer" id="answer2" required value="${quizContent.choices[currentInd][1]}">
          <label for="answer2">${quizContent.choices[currentInd][1]}</label>
          <br>
          <input type="radio" name="answer" id="answer3" required value="${quizContent.choices[currentInd][2]}">
          <label for="answer3">${quizContent.choices[currentInd][2]}</label>
          <br>
          <input type="radio" name="answer" id="answer1" required value="${quizContent.choices[currentInd][3]}">
          <label for="answer1">${quizContent.choices[currentInd][3]}</label>
          <br>
         </section>
          <div class="nav-bar">
            <div class="col-3">
              <span class="number">Question ${currentInd + 1}/10</span>
            </div>
            <div class="col-3">
              <button type="submit" class="form-button">Submit</button>
            </div>
            <div class="col-3">
              <span class="score">Score: ${currentScore}/10</span>
            </div>
          </div>
      </form>`);
  clueButton();
  currentInd++;
}
// Clue button on each page, pops up clue with GIF
function clueButton () {
  $('body').on('click', '#clue-button', function(event){
    console.log(`The clueButton function ran`);
    $('body').append(`
      <div class="overlay">
        <div class="popup">
          <a class="close" href="#">&times;</a>
          <h2>${quizContent.clue[0].text}</h2>
          ${quizContent.clue[0].img}
        </div>
      </div>`);
  $('.close').click(function () {
    $('.overlay').remove();
  })
  })
}



// load the final score page to the screen
function finalScorePage (){
  console.log('The finalScorePage function ran');
  $('main').html(`
    <div class="score-page">
      <span>Final Score ${currentScore}/10</span>
      <img src="https://media.giphy.com/media/q00MEm4eB0x7W/giphy.gif" alt="Something Terrible has happened here" class="final-img">
      <button type="button" id="restart-quiz">Restart Quiz</button>
    </div>`);
  $('header').remove();
  //***add a restart quiz button
  restartQuiz();
}

function restartQuiz () {
  $('body').on('click', '#restart-quiz', function (event) {
    event.preventDefault();
    window.location.reload(true);
  })
}

// Where all functions will be invoked
function renderPage () {
  startPage();
  startQuiz();
  submitQuestion();
}

// document ready function
$(renderPage());







