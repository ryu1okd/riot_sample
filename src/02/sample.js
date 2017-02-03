
riot.tag2('sample', '<h3>{message}</h3> <div> <button onclick="{player1_win}" value="true">player1</button> <button onclick="{player1_win}" value="false">player2</button> </div> <ul> <li each="{game_result in game_results}">{game_result.player1} : {game_result.player2}</li> </ul>', 'sample,[data-is="sample"]{ front-size: 2rem } sample h3,[data-is="sample"] h3{ color: #444 } sample ul,[data-is="sample"] ul{ color: #999 }', '', function(opts) {
this.message = 'player1 vs player2';
this.game_results = [];
this.player1_win = function(e){
  return this.game_results.push(e.target.value === "true"
    ? {
      player1: 'win',
      player2: 'lose'
    }
    : {
      player1: 'lose',
      player2: 'win'
    });
};
});