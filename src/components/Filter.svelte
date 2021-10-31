<script lang="ts">
	export let value: string[];
	export let options: string[];

	let filterValue: string = '';
	let oldFilterValue: string = '';
	let filteredOptions: string[] = options;
	let showOptions: boolean = false;
	let selectFocused: boolean = false;

	// $: if (
	// 	!selectFocused &&
	// 	(value.length === 0 || value.length === options.length) &&
	// 	filterValue === ''
	// ) {
	// 	filteredOptions = options;
	// 	value = [];
	// } else if (!selectFocused && oldFilterValue !== filterValue) {
	// 	const newFilteredOptions = [];

	// 	const matches = (value: string) => value.match(new RegExp(filterValue, 'gi'));

	// 	for (const option of options) {
	// 		if (matches(option)) {
	// 			newFilteredOptions.push(option);
	// 			continue;
	// 		}
	// 	}

	// 	filteredOptions = newFilteredOptions;
	// 	value = newFilteredOptions;
	// 	oldFilterValue = filterValue;
	// }

	$: if (filterValue === '' && showOptions && !selectFocused && filterValue !== oldFilterValue) {
		filteredOptions = options;
		value = [];
	}

	$: if (filterValue !== '' && showOptions && !selectFocused) {
		const newFilteredOptions = [];

		const matches = (value: string) => value.match(new RegExp(filterValue, 'gi'));

		for (const option of options) {
			if (matches(option)) {
				newFilteredOptions.push(option);
				continue;
			}
		}

		filteredOptions = newFilteredOptions;
		value = newFilteredOptions;
		oldFilterValue = filterValue;
	}
</script>

<div class="root">
	<input
		type="text"
		bind:value={filterValue}
		on:focus={() => {
			showOptions = true;
		}}
		on:blur={() => {
			setTimeout(() => {
				if (!selectFocused) {
					showOptions = false;
				}
			}, 100);
		}}
	/>
	<div class="floatContext">
		<div class="float">
			{#if filteredOptions.length > 0}
				<select
					class="item"
					multiple
					size={Math.min(filteredOptions.length, 10)}
					hidden={!showOptions}
					bind:value
					on:focus={() => {
						selectFocused = true;
						showOptions = true;
					}}
					on:blur={() => {
						selectFocused = false;

						if (showOptions) {
							showOptions = false;
						}
					}}
				>
					{#each filteredOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.root {
		width: 100%;

		.floatContext {
			position: relative;

			.float {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				display: flex;

				select {
				}
			}
		}
	}
</style>
