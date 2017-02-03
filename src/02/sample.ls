@message = 'player1 vs player2'
@game_results = []
@player1_win = (e) ->
  @game_results.push if e.target.value is "true" then player1: \win, player2: \lose else player1: \lose, player2: \win
