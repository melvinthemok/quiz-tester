
function announce () {
  if (quiz.isGameOver) {
    $('.query').addClass('text-center')
    if (whoWon() === 1) {
      $('.query').text('Player 1 wins')
    } else if (whoWon() === 2) {
      $('.query').text('Player 2 wins')
    } else {
      $('.query').text('Both players are tied')
    }
    $('button').eq(0).text('Restart')
    $('button').eq(1).text('again')
    $('button').eq(2).text('once more')
    $('button').eq(3).text('from the top')
  } else {
    $('.query').removeClass('text-center')
    $('.query').text(quiz.questions[quiz.currentQuestion].prompt)
    $('img').attr('src', quiz.questions[quiz.currentQuestion].pic)
    $('button').eq(0).text(quiz.questions[quiz.currentQuestion].options[0])
    $('button').eq(1).text(quiz.questions[quiz.currentQuestion].options[1])
    $('button').eq(2).text(quiz.questions[quiz.currentQuestion].options[2])
    $('button').eq(3).text(quiz.questions[quiz.currentQuestion].options[3])
  }
  $('.score').eq(0).text('Player 1: ' + quiz.player1Points)
  $('.score').eq(1).text('Player 2: ' + quiz.player2Points)
}

$(function () {
  $('button').click(function () {
    if (isGameOver()) {
      restart()
    } else {
      playTurn($(this).index())
    }
    announce()
  })
  announce()
})
