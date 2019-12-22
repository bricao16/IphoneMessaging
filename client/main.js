var socket = io();

var form = document.querySelector('form');
var connectCounter = 0;
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var input = document.querySelector('#message');
  var text = input.value;
  socket.emit('message', text);
  input.value = '';
});

socket.on('message', function (text) {
  connectCounter++;
  console.log(connectCounter);
  if (connectCounter > 1) {


    if (!text) {
      return;
    }
    var container = document.querySelector('section');
    var newMessage = document.createElement('p');
    newMessage.innerText = text;
    newMessage.setAttribute("id", "p2");

    container.appendChild(newMessage);

    var seperator = document.createElement('br');
    container.appendChild(seperator);

    container.scrollTop = container.scrollHeight;
  }
  else {

    var questionNum = 0;													// keep count of question, used for IF condition.
    var question = 'what is your name?';				  // first question

    var container = document.querySelector('section');
    var newMessage = document.createElement('p');
    newMessage.innerText = question;
    newMessage.setAttribute("id", "p2");

    container.appendChild(newMessage);
    var newMessage = "";
    var seperator = document.createElement('br');
    container.appendChild(seperator);

    container.scrollTop = container.scrollHeight;


    function bot() {
      var input = document.getElementById("message").value;
      console.log(message);

      if (questionNum == 0) {

        newMessage.innertext = 'hello ' + message;// output response
        newMessage.setAttribute("id", "p2");
        container.appendChild(newMessage);
        container.appendChild(seperator);
        container.scrollTop = container.scrollHeight;

        question = 'How old are you?';			    	// load next question		
        setTimeout(timedQuestion, 1000);									// output next question after 2sec delay
      }

      else if (questionNum == 1) {
        
        newMessage.innertext = 'That means you were born in ' + (2019 - message) + ". \nMy brother was also born in" + (2019 - message) + "." ;
        newMessage.setAttribute("id", "p2");

        container.appendChild(newMessage);
        container.appendChild(seperator);
        container.scrollTop = container.scrollHeight;
        question = 'Where are you from?';
        newMessage.innerText = question;
        newMessage.setAttribute("id", "p2");

        container.appendChild(newMessage);
        container.appendChild(seperator);
        container.scrollTop = container.scrollHeight;
        setTimeout(timedQuestion, 1000);
      }
    }

    function timedQuestion() {
      output.innerHTML = question;
    }

    //push enter key (using jquery), to run bot function.
    $(document).keypress(function (e) {
      if (e.which == 13) {
        bot();																						// run bot function when enter key pressed
        questionNum++;																		// increase questionNum count by 1
      }
    });


  }
});
