function Question (prompt, options, correctChoice, pic) {
  this.prompt = prompt
  this.options = options
  this.correctChoice = correctChoice
  this.pic = pic
}

var question1 = new Question('Question 1: Which option is not an anagram of a country capital?', ['Lip riot', 'Asia bad dab', 'Tulip pan', 'Plaza'], 2, 'img/tripoli.jpg')
var question2 = new Question('Question 2: How many times in total was Zsa Zsa Gabor married?', [6, 7, 8, 9], 3, 'img/zsa-zsa-gabor.jpg')
var question3 = new Question('Question 3: Which of the following is not a song by The Cure?', ['Just like heaven', 'Strangelove', 'Friday I\'m in love', 'The lovecats'], 1, 'img/depeche-mode.png')
var question4 = new Question('Question 4: Which character in Blade Runner is this?', ['Roy Batty', 'Rick Deckard', 'Pris Stratton', 'Zhora Salome'], 0, 'img/roy-batty.jpg')

var quiz = {
  questions: [question1, question2, question3, question4],
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
  player2Points: 0
}

function numberOfQuestions () {
  return quiz.questions.length
}

function currentQuestion () {
  return quiz.currentQuestion
}

function correctAnswer () {
  return quiz.questions[quiz.currentQuestion].correctChoice
}

function numberOfAnswers () {
  return quiz.questions[quiz.currentQuestion].options.length
}

function playTurn (choice) {
  if (quiz.isGameOver === true) {
    return false
  }
  var correct = false
  if (choice === correctAnswer()) {
    correct = true
    if (quiz.currentQuestion % 2 === 0) {
      quiz.player1Points += 1
    } else if (quiz.currentQuestion % 2 === 1) {
      quiz.player2Points += 1
    }
  }
  quiz.currentQuestion += 1
  if (quiz.currentQuestion === numberOfQuestions()) {
    quiz.isGameOver = true
  }
  return correct
}

function isGameOver () {
  return quiz.isGameOver
}

function whoWon () {
  if (quiz.isGameOver) {
    if (quiz.player1Points > quiz.player2Points) {
      return 1
    } else if (quiz.player1Points < quiz.player2Points) {
      return 2
    } else {
      return 3
    }
  } else {
    return 0
  }
}

function restart () {
  quiz.currentQuestion = 0
  quiz.isGameOver = false
  quiz.player1Points = 0
  quiz.player2Points = 0
}
