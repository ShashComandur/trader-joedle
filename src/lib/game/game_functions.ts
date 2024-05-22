// Thresholds for hints
let green_threshold: Object, yellow_threshold: Object, red_threshold: Object

// Set thresholds depending on price - helper for check win
function set_thresholds(price: number) {
    green_threshold = { emoji: '🟢', price: Math.abs(price * 0.05) };
    yellow_threshold = { emoji: '🟡', price: Math.abs(price * 0.15) };
    red_threshold = { emoji: '🔴' };
}

export default function check_win(guesses: Array<Object>, guess: number, price: number) {
    set_thresholds(price)                                       // set thresholds based on price
    const distance = Math.abs(guess - price);                   // calculate distance to price
    let hint = '';
    let game_state = 1; 
    let message = '';

    // set hint and message based on thresholds. also set game_state to 0 or 2 if the game is lost or won
    if (distance <= green_threshold.price) {
        hint = green_threshold.emoji;
        game_state = 2;
        message = "you win!"
    } else if (distance <= yellow_threshold.price) {
        hint = yellow_threshold.emoji;
        game_state = guesses.length === 5 ? 0 : 1;
        message = "you lose!"
    } else {
        hint = red_threshold.emoji;
        game_state = guesses.length === 5 ? 0 : 1;
        message = "you lose!"
    }

    return { hint, game_state, message };                   // return the hint, message and the current game state
}