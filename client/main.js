var socket = io();

var form = document.querySelector('form');
var myArray = ['Where is the last place you would ever go?', 
'What are you completely over and done with?', 'What memory do you just keep going back to?',
'What’s the most immature thing your parents do?', 'What do you enjoy doing?',
'What is the most unusual fear you have?', 'What is your favorite TV show?', 'What’s the most ridiculous argument you’ve had?'
, 'What movie or book character are you most similar to?', 'What is your favorite movie?', 
'What’s the scariest dream you’ve ever had?', 'What super power do you wish you had?',
'How was your day?', 'How are you?', 'What’s your very first memory?', 'What country do you most want to travel to?', 'Which foreign language would you like to learn?'
, 'What’s the first thing you grab for in the morning?', 'Who is your biggest inspiration in life?', 'What do you think people notice most about you?',
'Who do you hope people notice most about you?', 'What is your biggest weakness/fatal flaw?', 'What is your biggest strength?', 'What to you is the perfect, most ideal age to be?',
'Yes or No?', ' High school. Awesome or terrible?', 'Cats or dogs?', 'Beaches or snow?', 'What is your absolute, number one, biggest pet peeve?', 'Do you believe in something after death?',
'Favorite game to play with friends?', 'Coffee or tea?', 'Is it okay to sleep with socks on?'

];    

var rand = myArray[Math.floor(Math.random() * myArray.length)];



form.addEventListener('submit', function(e) {
  e.preventDefault();
  var input = document.querySelector('#message');
  if(input!=null){
  var text = input.value;
  console.log(text);

  }
  socket.emit('message', text);
  
  input.value = '';
  rand = myArray[Math.floor(Math.random() * myArray.length)];
});

socket.on('message', function(text) {
  var randtext = rand;

  if (!text) {
    return;
  }
  var container = document.querySelector('section');
  var newMessage = document.createElement('p');
  console.log(text);
  newMessage.innerText = text;
  console.log(newMessage.innerText);

  container.appendChild(newMessage);

  var seperator = document.createElement('br');
  container.appendChild(seperator);

  container.scrollTop = container.scrollHeight;

  var container1 = document.querySelector('section');
  var newMessage1 = document.createElement('p');
  newMessage1.innerText = randtext;
  container1.appendChild(newMessage1);

  var seperator1 = document.createElement('br');
  container1.appendChild(seperator1);

  container1.scrollTop = container1.scrollHeight;
  rand = myArray[Math.floor(Math.random() * myArray.length)];
});
