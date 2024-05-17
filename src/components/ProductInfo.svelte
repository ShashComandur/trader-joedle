<script lang="ts">
	export let product: Object;
</script>

<h1>{product.name}</h1>
<h1>{product.price}/{product.quantity}</h1>
<img src={product.img} />
