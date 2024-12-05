function playGame(playerChoice) {
    const choices = ['Pedra', 'Papel', 'Tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'Empate!';
    } else if (
        (playerChoice === 'Pedra' && computerChoice === 'Tesoura') ||
        (playerChoice === 'Papel' && computerChoice === 'Pedra') ||
        (playerChoice === 'Tesoura' && computerChoice === 'Papel')
    ) {
        result = 'Você ganhou!';
    } else {
        result = 'Você perdeu!';
    }

    document.getElementById('game-result').textContent = `Você escolheu ${playerChoice}, o computador escolheu ${computerChoice}. ${result}`;
}
