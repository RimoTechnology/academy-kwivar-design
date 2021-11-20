

    let startGame = function(evt){

        let button = evt.target;
       
        button.style.display = "none";

        let hiddenItems  = document.querySelectorAll('.hidden');
        hiddenItems.forEach(function(element){
           element.classList.remove('hidden')
        })

    }

    let scorePlayer1 = function() {
        let element = document.querySelector("#player1Point");
        let point = parseInt(element.innerHTML);
        let newPoint = point+1;
        element.innerHTML = newPoint;

        determineWinnerOfMatch();
    }

    let scorePlayer2 = function() {
        let element = document.querySelector("#player2Point");
        let point = parseInt(element.innerHTML);
        let newPoint = point+1;
        element.innerHTML = newPoint;

        determineWinnerOfMatch();
    }

    let resetScores = function(){
        
        document.querySelector("#player1Point").innerHTML = 0;

        document.querySelector("#player2Point").innerHTML = 0;

        document.querySelector('#winner-text').innerHTML = "No winner yet still playing..."
    }

    let determineWinnerOfMatch = function() {
        let point1 = parseInt(document.querySelector("#player1Point").innerHTML);

        let point2 = parseInt(document.querySelector("#player2Point").innerHTML);

        if (Math.abs(point1 - point2) >= 2) {
            // We found a winner for the match
            let winnerText = document.querySelector('#winner-text')
            if (point1 > point2) {
                winnerText.innerHTML = "Player 1 has won the match"
            }else 
            {
                winnerText.innerHTML = "Player 2     has won the match"
            }

            // Grab the buttons and disbable then
            let scoreBtns = document.querySelectorAll('.scorebtns');
            scoreBtns.forEach((element)=> {
                element.setAttribute('disabled', true);
            })

            
        }
    }
