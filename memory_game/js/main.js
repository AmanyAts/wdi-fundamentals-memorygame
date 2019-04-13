//console.log("Up and running!");

var cards=["queen" , "queen" ,"King" , "king"];
var cardsInPlay=[];
//checkForMatch
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}//endOfCheckmatch

//flipCard
var flipCard = function(cardId){

console.log("User flipped "+cards[cardId]);
cardsInPlay.push(cards[cardId]);

	

}//endOfflipCard
//calling the functions
flipCard(0);
flipCard(2);
checkForMatch();
