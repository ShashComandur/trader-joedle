<script lang="ts">
	import ProductInfo from '../components/ProductInfo.svelte';
	import Guesses from '../components/Guesses.svelte';
	export let data;

	/* Game state:
	 * game_state = 1 indicates an ongoing game
	 * game_state = 0 indicates a lost game
	 * game_state = 2 indicates a won game
	 */
	let game_state = 1;

	// ProductInfo consts
	const price = data.price;
	const img = data.img;
	const name = data.name;
	const quantity = data.amount + ' ' + data.unit;
	const date = data.date;
	const game_number = data.game_number;

	const product = { name, price, img, quantity, date, game_number };

	// Guesses
	let current_guess;
	let guesses = [];

	// Handle guess input
	function handle_guess(guess: number) {
		if (guesses.length == 5) {
			guesses = [...guesses, guess]; // push last guess
			game_state = 0; // game over
			return;
		}

		guesses = [...guesses, guess]; // must be written this way so that Guesses component is reactive
	}
</script>

<h1 class="flex justify-center pt-5 font-traderjoes text-6xl text-crimson">Trader Joedle</h1>

<div class="flex justify-center p-5">
	<ProductInfo {product} />
	<div class="p-3">
		<Guesses {guesses} />

		{#if game_state == 1}
			<div class="flex justify-center pt-3">
				<input
					type="number"
					id="guess"
					min="0"
					placeholder="Enter your guess!"
					class="pr-3"
					bind:value={current_guess}
				/>

				<button
					class="bg-crimson uppercase text-off-white font-lato w-40 rounded-md"
					on:click={() => handle_guess(current_guess)}>Submit</button
				>
			</div>
		{/if}
	</div>
</div>
