// Thresholds for hints
let green_threshold, yellow_threshold, red_threshold: Object

// Set thresholds depending on price - helper for check win
function set_thresholds(price: number) {
    green_threshold = { emoji: '🟢', price: Math.abs(price * 0.05) };
    yellow_threshold = { emoji: '🟡', price: Math.abs(price * 0.15) };
    red_threshold = { emoji: '🔴' };
}

// Check win function
export default function check_win(guesses: Array<Object>, guess: number, price: number) {
    set_thresholds(price)
    const distance = Math.abs(guess - price);
    let game_state = 1; 
    let hint = '';

    // set hint based on thresholds
    // also set game_state to 2 if the game is won
    if (distance <= green_threshold.price) {
        hint = green_threshold.emoji;
        game_state = 2;
    } else if (distance <= yellow_threshold.price) {
        hint = yellow_threshold.emoji;
        game_state = guesses.length === 5 ? 0 : 1;
    } else {
        hint = red_threshold.emoji;
        game_state = guesses.length === 5 ? 0 : 1;
    }

    // return the hint and the current game state
    return { hint, game_state };
}