/*
1. User loads page. Introductory modal/screen displays, with prep/instructions. "When you're ready, push START"
2. User pushes start, launching first page of quiz.
  2a. Timer starts and displays; properties of first question-object display
  NB: maybe question-objects should be stored in a big array this time instead of an object, to access them sequentially
3. EITHER...
  3a. User chooses the right answer, in which case...
    4a. Display success message and pic associated with that question, OR
  3b. User chooses a wrong answer, in which case...
    4b. Display same page, except with "Wrong!" message instead of "Right!"
  3c. User makes no choice and timer runs out, in which case ...
    4c. Display same page, with "Time's Up!"
*/

var questionArray = [
  {
    question: "",
    correctAnswer: "",
    wrongAnswer1: "",
    wrongAnswer2: "",
    wrongAnswer3: "",
    doneMessage: "",
    image: ""
  }
];

$("#startBtn").on(click, function () {
  $("#main-card-content").html(`
    
  `);
});