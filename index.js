function writeCards (nameArray, message) {
const newCards = [];
  for (let i=0; i < nameArray.length; i++) {
    newCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${message} gift!`);
}
return newCards;
}
console.log(writeCards(["Charlie", "Samip","Aki"], "birthday"))

function countDown (num){
    while(num >= 0){
        console.log(num);
        num--;
    }

}