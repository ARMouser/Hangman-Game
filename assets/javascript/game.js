window.onload = game()

function game ()
{

var key = ["prue", "piper", "phoebe", "paige", "three", "triad", "leo", "wyatt", "cole", "balthazar", "witches", "whitelighter", "source"]
	var compguessnum = Math.floor(Math.random() * key.length)
	var compguessword = key[compguessnum]
	var compguessmaster = compguessword.split("")
	var correct = ""
	console.log(compguessmaster)

	for (var g = 0; g < compguessmaster.length; g++) 
	{
		var unknown = document.createElement("span")
			var unguessed = document.createTextNode(" _ ")
			unknown.appendChild(unguessed)
			document.getElementById("hang").appendChild(unknown).setAttribute("id", compguessmaster[g]);
	}


	var attempt = 15
		var attempts = document.createElement("span")
		var attemptsleft = document.createTextNode(attempt)
		attempts.appendChild(attemptsleft)
		document.getElementById("tries").appendChild(attempts)

document.onkeyup = function(event) {
var alpha = event.keyCode || event.which
if ((alpha >= 65) && (alpha<= 90))
 {var guess = event.key}

console.log(guess)
var guessl = compguessmaster.indexOf(guess)

	if ((guessl != -1 ) && (attempt > 0))
		{var right = document.createElement("span")
			var textright = document.createTextNode(guess)
			right.appendChild(textright)
			document.getElementById(guess).innerHTML = guess
		}
		
	else if (attempt >0)
	 	{
			var guesslist = document.createElement("span")
			var text = document.createTextNode(guess + ", ")
			guesslist.appendChild(text)
			document.getElementById("guesses").appendChild(guesslist)
			attempt -= 1
			document.getElementById("tries").innerHTML = attempt
		}
	else {
		game()
		
		}
	}
}