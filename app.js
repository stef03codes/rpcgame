let playerScore = 0;
let computerScore = 0;

const updateScores = () => {
    document.querySelector(".player").innerText = playerScore;
    document.querySelector(".computer").innerText = computerScore;
}

const chooseWinner = (player, computer) => {
    let message = document.querySelector(".message");
    let winner = document.querySelector('.winner');

    message.innerText = `The computer had ${computer}!`;
    if(player === computer) {
        winner.innerText = "It's tie!";
    }
    else if((player === 'rock' && computer === 'scissors')
    || (player === 'paper' && computer === 'rock')
    || (player === 'scissors' && computer === 'paper'))
    {
        playerScore++;
        winner.innerText = 'Player wins!';
        updateScores();
    }
    else {
        computerScore++;
        winner.innerText = 'Computer wins!';
        updateScores();
    }
}

const game = (playerMove) => {
    let options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerMove = options[randomNumber];

    chooseWinner(playerMove, computerMove);
}

// Event listeners
let options =  document.querySelectorAll('i');
options.forEach(option => {
    option.addEventListener('click', (e) => {
        let mainElement = e.target.closest('.option');
        let move = e.target.getAttribute('id');
        
        mainElement.setAttribute('data-name', `${move}`);
        mainElement.classList.add('filled');

        setTimeout(() => mainElement.classList.remove('filled'), 1000);
        document.querySelector('.status').style.display = 'block';

        game(move);
    });
});