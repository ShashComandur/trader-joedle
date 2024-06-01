<script>
	import { page } from '$app/stores';
	let capsError = $page.error?.message.toUpperCase();
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<body class="tracking-tight text-center">
	<div class="font-traderjoes text-6xl md:text-6xl text-crimson">{$page.status}</div>
	<div class="font-lato text-xl md:text-xl">{capsError}</div>
	<div class="">
		SOMETHING WENT WRONG! <br /> <a href="/"> HEAD BACK HOME? </a>
	</div>
</body>
