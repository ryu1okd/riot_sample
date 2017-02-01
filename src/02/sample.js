
riot.tag2('sample', '<h3>{message}</h3> <div> <button onclick="{player1_win}" value="1">1</button> <button onclick="{player1_win}" value="2">2</button> </div> <ul> <li each="{game_result in game_results}">{game_result}</li> </ul>', 'sample,[data-is="sample"]{ front-size: 2rem } sample h3,[data-is="sample"] h3{ color: #444 } sample ul,[data-is="sample"] ul{ color: #999 }', '', function(opts) {
this.message = 'player1 vs player2';
this.game_results = [true, false];
this.player1_win = function(e){
  console.log(e.item);
  console.log('hogehoge');
  return this.game_results.push(e);
};
});