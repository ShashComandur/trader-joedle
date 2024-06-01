<script>
	import compass from '$lib/assets/icons/compass.png';
	import cutlery from '$lib/assets/icons/cutlery.png';
	import banana from '$lib/assets/icons/fruit.png';
</script>

<div
	class="border border-gray-200 rounded-lg shadow dark:border-gray-700 font-poly tracking-tight bg-[#FFFFFF] p-5 max-w-lg"
>
	<div class="pb-10">
		<div class="flex flex-row">
			<img src={compass} class="w-10 h-10" />
			<div class="font-poly text-3xl pl-2 pb-2 font-bold">The Game</div>
		</div>
		<p class="font-lato pb-2">
			Guess the&#8196<a class="font-traderjoes text-lg text-crimson">Trader Joedle</a>&#8196in six
			attempts or less! If you guess the price of the item within 5%, you win!
		</p>
		<hr />
		<p class="font-lato pb-2 pt-2">
			If you don't get it right, you'll get a hint. An up arrow means your guess is too low, and a
			down arrow means your guess is too high. A yellow emoji indicates that you are warm (within
			25% of the price).
		</p>
		<hr />
		<p class="font-lato pb-2 pt-2">
			A new&#8196<a class="font-traderjoes text-lg text-crimson">Trader Joedle</a>&#8196is available
			every day, at 12AM EST. Share your score when you finish!
		</p>
	</div>
	<div class="pb-10 text-right">
		<div class="flex flex-row justify-end">
			<div class="font-poly text-2xl md:text-3xl pr-2 pb-2 font-bold text-right">
				Acknowledgements
			</div>
			<img src={banana} class="w-10 h-10" />
		</div>
		<p class="font-lato pb-2 pt-2">
			Special thanks to <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> and
			<a href="https://costcodle.com/">Costcodle</a>
			(created by
			<a href="https://github.com/KermWasTaken">@Kerm</a>) for inspiring&#8196<a
				class="font-traderjoes text-lg text-crimson">Trader Joedle</a
			>&#8196!
		</p>
		<hr />
		<p class="font-lato pb-2 pt-2">
			Created by <a href="http://shashcomandur.com/">Shashank Comandur</a>. If you have suggestions,
			comments, or found a bug, please
			<a href="mailto:shashank.comandur@gmail.com">shoot me an email</a>!
		</p>
	</div>
	<div class="pb-5">
		<div class="flex flex-row">
			<img src={cutlery} class="w-10 h-10" />
			<div class="font-poly text-3xl pl-2 pb-2 font-bold">Development</div>
		</div>

		<p class="font-lato pb-2 pt-2">
			This app was created using <a href="https://kit.svelte.dev/">SvelteKit</a>,
			<a href="https://tailwindcss.com/">Tailwind</a>, and deployed with
			<a href="https://vercel.com/">Vercel</a>. The product data was sourced from
			<a href="https://www.traderjoes.com/home/products">Trader Joe's product API</a>. All source
			code is available on my
			<a href="https://github.com/ShashComandur/trader-joedle">GitHub</a>!
		</p>
	</div>
</div>

<style>
	a {
		text-decoration: underline #dc143c;
		text-underline-offset: 3px;
	}
</style>
