// Thresholds for hints
let green_threshold: Object, yellow_threshold: Object, red_threshold: Object

// Set thresholds depending on price - helper for check win
function set_thresholds(price: number) {
    green_threshold = { emoji: '🟢', price: Math.abs(price * 0.05) };
    yellow_threshold = { emoji: '🟡', price: Math.abs(price * 0.25) };
    red_threshold = { emoji: '🔴' };
}

function up_or_down(guess: number, price: number) {
    if (guess - price < 0) { return "↑"; }
    else if (guess - price > 0) { return "↓"; }
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
        message = "You win! The price was $" + price + "." 
    } else if (distance <= yellow_threshold.price) {
        hint = yellow_threshold.emoji;
        hint += up_or_down(guess, price);
        game_state = guesses.length === 5 ? 0 : 1;
        message = "You lose! The price was $" + price + "." 
    } else {
        hint = red_threshold.emoji;
        hint += up_or_down(guess, price);
        game_state = guesses.length === 5 ? 0 : 1;
        message = "You lose! The price was $" + price + "." 
    }

    return { hint, game_state, message };                   // return the hint, message and the current game state
}

