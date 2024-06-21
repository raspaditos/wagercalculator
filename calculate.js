function calculateWager() {
    const odds = parseInt(document.getElementById('odds').value);
    const jackpot = parseFloat(document.getElementById('jackpot').value);

    if (isNaN(odds) || isNaN(jackpot) || odds < 1 || jackpot < 0) {
        alert('Please enter valid values.');
        return;
    }

    // Calculate the expected amount of money to wager to win the jackpot
    const expectedWager = odds * jackpot;

    // Display the result in the read-only input field
    document.getElementById('result').value = expectedWager.toFixed(2);
}
