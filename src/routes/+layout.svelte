<script>
	import '../app.css';
	import help from '$lib/assets/help.svg';
</script>

<main class="bg-off-white">
	<h1 class="flex justify-center pt-5 font-traderjoes text-4xl md:text-6xl text-crimson">
		Trader Joedle
	</h1>

	<div class="flex flex-col md:flex-row justify-center p-5">
		<slot />
	</div>
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-off-white;
	}
</style>
