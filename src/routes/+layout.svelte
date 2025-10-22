<script>
	import '../app.css';
	import help from '$lib/assets/help.svg';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { page } from '$app/stores';

	inject({ mode: dev ? 'development' : 'production' });

	async function handleLogout() {
		await fetch('/api/logout', { method: 'POST' });
		window.location.reload();
	}

	$: showHeader = $page.url.pathname !== '/auth';
</script>

<main class="bg-off-white">
	{#if showHeader}
		<div class="flex flex-row justify-between items-center pt-5 px-5">
			<div class="flex flex-row justify-center flex-1">
				<h1 class="font-traderjoes text-4xl md:text-6xl text-crimson pr-5">
					<a href="/">Trader Joedle</a>
				</h1>
				<a href="/about">
					<img src={help} class="w-7 pt-1 md:w-9 md:pt-3" alt="Help" />
				</a>
			</div>

			<button
				on:click={handleLogout}
				class="text-sm text-gray-600 hover:text-red-600 underline font-lato"
				title="Logout"
			>
				Logout
			</button>
		</div>
	{/if}

	<div class="flex flex-col md:flex-row justify-center p-5">
		<slot />
	</div>
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-off-white;
	}
</style>
