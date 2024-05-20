<script lang="ts">
	export let guesses = [];
</script>

<div class="font-bold">
	<h1
		class="font-normal text-brown dark:text-gray-400 font-lato font-semibold uppercase tracking-tight"
	>
		Your Guesses
	</h1>

	<div class="font-poly text-3xl">
		{#each guesses as guess}
			${guess} <br />
		{/each}
	</div>
</div>
