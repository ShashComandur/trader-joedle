<script lang="ts">
	export let product: Object;
	export let game_state: number;
	import { fly } from 'svelte/transition';
	import Badge from './Badge.svelte';

	const item_characteristics = product.item_characteristics;
</script>

<div
	class="border border-gray-200 rounded-lg shadow dark:border-gray-700 font-poly tracking-tight bg-[#FFFFFF]"
>
	<div class="p-5">
		<div class="flex justify-center">
			<img class="rounded-t-lg pb-3 max-h-52 max-w-96 md:max-h-96" src={product.img} alt={product.name} />
		</div>
		<div>
			<p
				class="font-normal text-brown dark:text-gray-400 font-lato font-semibold uppercase tracking-tight"
			>
				Trader Joedle #{product.game_number}
			</p>
			<h5 class="pb-1 text-2xl font-bold text-gray-900 dark:text-white max-w-96">
				{product.name}
			</h5>

			<Badge {item_characteristics} />

			<div class="flex justify-end">
				{#if game_state == 1}
					<div class="font-bold text-3xl">???</div>
				{/if}
				{#if game_state !== 1}
					<div class="font-bold text-3xl" transition:fly={{ x: -50 }}>${product.price}</div>
				{/if}
				&#8200/&#8200
				<div class="font-lato">{product.quantity}</div>
			</div>
		</div>
	</div>
</div>
