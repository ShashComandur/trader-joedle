<script lang="ts">
	export let item_characteristics: [];

	function format_characteristics(chars: []) {
		const color_map = {
			'Antibiotic Free': 'bg-red-400',
			'Dairy Free': 'bg-stone-200',
			'Fair Trade': 'bg-yellow-300',
			'Gluten Free': 'bg-pink-300',
			'Grass Fed': 'bg-lime-400',
			'Kosher': 'bg-sky-300',
			'Organic': 'bg-teal-100',
			'Vegan': 'bg-orange-400',
			'Vegetarian': 'bg-violet-400'
		};
		let ret = [];
		for (var char of chars) {
			let display = char;
			let bg = color_map[display];
			ret.push({
				display: display,
				bg: bg
			});
		}
		return ret;
	}

	let chars = [];
	if (item_characteristics) {
		chars = format_characteristics(item_characteristics); // format chars if they exist
	}
</script>

<div class="mb-2 font-lato uppercase text-xs flex overflow-y-auto">
	{#each chars as char}
		<div
			class="{char[
				'bg'
			]} outline outline-1 rounded-xl m-1 text-center items-center justify-center p-1 font-semibold"
		>
			{char['display']}&#8200
		</div>
	{/each}
</div>
