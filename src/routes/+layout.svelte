<script>
	import '../app.css';
	import help from '$lib/assets/help.svg';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<main class="bg-off-white">
	<div class="flex flex-row justify-center pt-5">
		<h1 class="font-traderjoes text-4xl md:text-6xl text-crimson pr-5">
			<a href="/">Trader Joedle</a>
		</h1>
		<a href="/about">
			<img src={help} class="w-7 pt-1 md:w-9 md:pt-3" />
		</a>
	</div>

	<div class="flex flex-col md:flex-row justify-center p-5">
		<slot />
	</div>
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-off-white;
	}
</style>
