<script lang="ts">
	import { copy } from 'svelte-copy';
	import { toast } from '@zerodevx/svelte-toast';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import ProductInfo from '../components/ProductInfo.svelte';
	import Guesses from '../components/Guesses.svelte';
	import check_win from '$lib/game/game_functions.ts';

	export let data;

	/* game state:
	 * game_state = 1 indicates an ongoing game
	 * game_state = 0 indicates a lost game
	 * game_state = 2 indicates a won game
	 */
	let game_state = 1;

	// for ProductInfo
	const price = data.price;
	const img = data.img;
	const name = data.name;
	const quantity = data.amount + ' ' + data.unit;
	const date = data.date;
	const game_number = data.game_number;
	const product = { name, price, img, quantity, date, game_number };

	// game information
	let current_guess, current_hint, inputField;
	let guesses = [];
	let hints = [];
	let game_message = '';
	let score = '';
	$: already_guessed = false;

	// guess handler
	function handle_guess(guess: number) {
		// check if already submitted
		already_guessed = false;
		if (guesses.some((obj) => obj.guess === guess)) {
			toast.push('Already guessed!');
			already_guessed = true;
			return;
		}

		if (!already_guessed) {
			let valid_guess = /\d|\./;
			if (!valid_guess.test(guess)) {
				toast.push('Invalid input. Try again!');
				return;
			}

			// get object of check win information
			let check_win_output = check_win(guesses, guess, price);

			// update game state, hint, and message
			game_state = check_win_output.game_state;
			current_hint = check_win_output.hint;
			game_message = check_win_output.message;

			// update guesses to display the hints - must be written this way so that Guesses component is reactive
			guesses = [...guesses, { guess: guess, hint: current_hint }];

			// push hint to hints, which also functions as the final copy-able score
			hints = [...hints, current_hint];

			// if the game ends
			if (game_state !== 1) {
				toast.push(game_message, {
					initial: 0
				}); // push win/loss message to toast component
				score = format_score(); // format copy-able score
			}
		}
	}

	// returns a formatted copy-able score
	// should probably go in game_functions.ts
	function format_score() {
		let ret = 'Trader Joedle #' + game_number + '\n';
		ret += hints.length + '/6' + '\n';
		for (const hint of hints) {
			ret += hint + '\n';
		}
		ret += 'https://trader-joedle.vercel.app' + '\n';
		return ret;
	}

	// submit on 'enter' press and clear input field
	const onInput = (event) => {
		if (event.key !== 'Enter') return;
		handle_guess(current_guess);
		inputField.value = '';
	};
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
				bind:this={inputField}
				bind:value={current_guess}
				on:keydown={onInput}
			/>
		</div>
	{/if}

	<!-- show copy score button if game is not ongoing -->
	{#if game_state !== 1}
		<button
			class="bg-crimson uppercase text-off-white font-lato w-40 rounded-md"
			id="copy-button"
			use:copy={score}
			on:click={() => toast.push('Score copied to clipboard.')}
		>
			Share Score
		</button>
	{/if}
</div>

<SvelteToast />
