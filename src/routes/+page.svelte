<script lang="ts">
	import ProductInfo from '../components/ProductInfo.svelte';
	export let data;

	const price = data.price;
	const img = data.img;
	const name = data.name;
	const quantity = data.amount + ' ' + data.unit;

	const product = { name, price, img, quantity };
</script>

<ProductInfo {product} />
