<script lang="ts">
	import { fly } from 'svelte/transition';
	export let guesses = [];
	$: remaining_guesses = Array(6 - guesses.length);
</script>

<div>
	<h1
		class="font-normal text-brown dark:text-gray-400 font-lato font-semibold uppercase tracking-tight"
	>
		Guess the price! ({guesses.length}/6)
	</h1>

	<div class="font-poly text-2xl md:text-3xl">
		{#each guesses as current_guess}
			<div class="bg-[#d1d7e0] rounded-lg m-2 p-2 outline outline-1">
				<div transition:fly={{ x: 100 }}>
					${current_guess.guess}
					{current_guess.hint} <br />
				</div>
			</div>
		{/each}
		{#each remaining_guesses as remaining}
			<div class="bg-[#d1d7e0] rounded-lg m-2 p-2 outline outline-1">&nbsp;</div>
		{/each}
	</div>
</div>
