<script lang="ts">
	import ProductInfo from '../components/ProductInfo.svelte';
	import Guesses from '../components/Guesses.svelte';
	import check_win from '$lib/game/game_functions.ts';

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
	let current_guess, current_hint;
	let guesses = [];
	let game_message = '';

	function handle_guess(guess: number) {
		let check_win_output = check_win(guesses, guess, price); // get object of check win information
		game_state = check_win_output.game_state; // update game state if it resulted in a win
		current_hint = check_win_output.hint; // update current hint
		game_message = check_win_output.message;
		guesses = [...guesses, { guess: guess, hint: current_hint }]; // update guesses to display the hints - must be written this way so that Guesses component is reactive
	}
</script>

<ProductInfo {product} />

<div class="pt-5 p-3">
	<Guesses {guesses} />

	<!-- show guess input if game is ongoing -->
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

	<!-- show win or loss message if game is not ongoing -->
	{#if game_state != 1}
		<h5 class="mb-5 text-2xl font-bold text-gray-900 dark:text-white">{game_message}</h5>
	{/if}
</div>
