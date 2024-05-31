/** @type {import('./$types').PageLoad} */
import games from "$lib/game/games.json";
const month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function get_todays_game() {
    const today_date = new Date();
    today_date.setHours(today_date.getHours() - 4);             // rewind 4 hours, since vercel deployment is in UTC, and the game works in EST
    let month = month_names[today_date.getMonth()].toString()
    let date = today_date.getDate().toString()
    let year = today_date.getFullYear().toString()
    if (date.length == 1) { date = 0 + date}            // add leading 0 to date if needed
    const formatted_date = `${month} ${date} ${year}`
    console.log(formatted_date)

    return games.filter(item => item.date === formatted_date)
}

export async function load() {
    const game = get_todays_game()[0]
    
    const price = game.price;
    const img = "https://www.traderjoes.com/" + game.img_path;
    const name = game.name;
    const amount = game.amount;
    const unit = game.unit;
    const date = game.date;
    const game_number = game.game_number;
    const item_characteristics = game.item_characteristics;

    return {
        price,
        img,
        name,
        amount,
        unit,
        date,
        game_number
    }
}