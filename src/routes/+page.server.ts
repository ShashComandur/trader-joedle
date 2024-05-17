/** @type {import('./$types').PageLoad} */

export async function load() {
    const price = 10.99;
    const img = "$lib/assets/Screenshot.png";
    const name = "Test Item";
    const amount = 10;
    const unit = "oz";

    return {
        price,
        img,
        name,
        amount,
        unit,
    }
}