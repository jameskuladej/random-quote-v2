// Create an array to store all the information
var quotes = [
 {word: 'I think; therefore I am',
  author: 'Rene Descartes',
  year: 1990,
  tag: 'Phylosophy'},
  {word: 'Out of difficulties grow miracles',
   author: 'Jean de la Bruyere',
    year: 2000,
    tag: 'Motivational'},
   {word: 'A person who never made a mistake never tried anything new',
    author: '"Albert Eistein"',
    year: 1950,
    tag: 'Motivational'},
    {word: 'The only source of knowledge is experience',
      author: '"Albert Eistein"',
      year: 1955,
      tag: 'Motivational'},
      {word: 'The course of true love never did run smooth',
        author: 'William Shakespeare',
        year: 1200,
        tag: 'love'}
];
var colors = ['red','black','blue','orange','green'];
function getRandomColor (){
  var getNumber = Math.floor(Math.random() * (5 - 0)+0 );
  var getColor = colors[getNumber];
  return getColor;
}
function getRandomQuote(max){
  if (max === undefined){
    max = 5;
  }
  var getrandomNumber = Math.floor(Math.random() * (max - 0)+0 );
  var getQuote = quotes[getrandomNumber];
  return getQuote;
}
//To random and print out color and quote
function printQuote (message){
  var storeQuote = getRandomQuote();
  var storeColor = getRandomColor();
  message = '<p class="quote">' + storeQuote.word + '</p>';
  message += '<p class="source">' + storeQuote.author;
  message += '<span class="year">' + storeQuote.year + '</span>' + '</p>';
  document.getElementById('quote-box').innerHTML = message;
  document.body.style.background = storeColor;
}
setInterval(printQuote,3000);
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
