<script lang="ts">
	export let product: Object;
</script>

<div
	class="max-w-xs border border-gray-200 rounded-lg shadow dark:border-gray-700 font-poly tracking-tight"
>
	<div class="p-5">
		<img class="rounded-t-lg pb-3" src={product.img} alt={product.name} />
		<div class="">
			<p
				class="font-normal text-brown dark:text-gray-400 font-lato font-semibold uppercase tracking-tight"
			>
				Trader Joedle #{product.game_number}
			</p>
			<h5 class="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
				{product.name}
			</h5>

			<div class="flex justify-end">
				<div class="font-bold text-3xl">???</div>
				&#8200/&#8200
				<div class="font-lato">{product.quantity}</div>
			</div>
		</div>
	</div>
</div>
