/** @type {import('./$types').PageLoad} */

export async function load() {
    const price = 10.99;
    const img = "https://www.traderjoes.com/content/dam/trjo/products/m20203/78395.png/jcr:content/renditions/webp-1280.webp";
    const name = "Irish Cheddar Cheese with Irish Whiskey";
    const amount = 16;
    const unit = "oz";
    const date = "1/1/1970"
    const game_number = "0"

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