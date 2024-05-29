<script lang="ts">
	export let guesses = [];
	$: remaining_guesses = Array(6 - guesses.length);
</script>

<div class="w-xs">
	<h1
		class="font-normal text-brown dark:text-gray-400 font-lato font-semibold uppercase tracking-tight"
	>
		Your Guesses
	</h1>

	<div class="font-poly text-3xl">
		{#each guesses as current_guess}
			<div class="bg-off-white rounded-lg m-1 p-2">
				${current_guess.guess}
				{current_guess.hint} <br />
			</div>
		{/each}
		{#each remaining_guesses as remaining}
			<div class="bg-off-white rounded-lg m-1 p-2">&nbsp;</div>
		{/each}
	</div>
</div>
