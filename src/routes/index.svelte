<script lang="ts">
	import { onMount } from 'svelte';
	import { sortBy, uniq } from 'lodash';
	import { localStorage } from '../shared/stores/localStorage';

	import ExpandableRow from '../components/ExpandableRow.svelte';
	import Filter from '../components/Filter.svelte';

	import type { Technique } from '../types/data/objectTypes/Technique';
	import type { DataResponse } from '../types/data/DataResponse';
	import type { MetadataResponse } from '../types/data/MetadataResponse';

	enum LocalStorageKeys {
		Filters = 'KenpoNext:Filters'
	}

	let techniques: DataResponse<Technique> = [];
	let sortedTechiques: ReadonlyArray<Technique> = [];
	let filteredTechniques: ReadonlyArray<Technique> = [];

	let random: boolean = false;
	let sorted: boolean = false;

	let techniquesMetadata: MetadataResponse<Technique>;
	let filterKeys: string[] = [];

	$: filtersStore = localStorage<{ [key: string]: string[] }>(LocalStorageKeys.Filters, {});
	$: filtersStore.set(filters);
	$: filters = $filtersStore;

	let filterOptions: { [key: string]: string[] } = {};

	onMount(async () => {
		const techniquesResponse = await fetch('data/techniques.json');

		techniques = sortBy(await techniquesResponse.json(), ['name']);

		const techniquesMetadataResponse = await fetch('data/metadata/techniques.json');

		techniquesMetadata = await techniquesMetadataResponse.json();

		for (const [filterKey, techniquesMetadataEntry] of Object.entries(techniquesMetadata)) {
			if (techniquesMetadataEntry.filterable) {
				filterKeys.push(filterKey);
				filterOptions[filterKey] = sortBy(
					uniq(techniques.map((technique) => technique[filterKey]))
				);

				if (filters[filterKey] === undefined) {
					filters[filterKey] = [];
				}
			}
		}
	});

	$: if (!random) {
		sortedTechiques = techniques;
	} else if (!sorted) {
		sortedTechiques = randomSort(techniques);
		sorted = true;
	}

	$: if (filters !== undefined) {
		let newFilteredTechniques = [];

		for (const technique of sortedTechiques) {
			let skip = false;

			for (const filterKey of filterKeys) {
				const filterValues = filters[filterKey];

				if (filterValues.length > 0 && !filterValues.includes(technique[filterKey])) {
					skip = true;
					break;
				}
			}

			if (!skip) {
				newFilteredTechniques.push(technique);
			}
		}

		filteredTechniques = newFilteredTechniques;
	}

	function randomSort(originalArray: any[]) {
		let array = [...originalArray];

		for (let index = 0; index < array.length; index++) {
			const randomElementIndex = Math.floor(Math.random() * (array.length - 1));

			const randomElement = array[randomElementIndex];
			array[randomElementIndex] = array[index];
			array[index] = randomElement;
		}
		return array;
	}
</script>

<div class="group header">
	<h1>Kenpo Karate</h1>
	<div class="item" />
	<button
		on:click={() => {
			random = !random;
			sorted = false;
		}}
		>Random {#if random}
			on
		{:else}
			off
		{/if}</button
	>
</div>
<div class="group column">
	<div class="group row">
		{#if techniques.length > 0}
			{#each filterKeys as filterKey}
				<div class="item cell">
					<h2>{techniquesMetadata[filterKey].name}</h2>
					<Filter bind:value={filters[filterKey]} options={filterOptions[filterKey]} />
				</div>
			{/each}
		{/if}
	</div>
	{#each filteredTechniques as technique}
		<div class="group row">
			<div class="item">
				<ExpandableRow>
					<div class="group">
						<div class="item cell">
							<strong>{technique.name}</strong>
						</div>
						<div class="item cell">
							<span>{technique.attack}</span>
						</div>
						<div class="item cell">
							<span>{technique.belt}</span>
						</div>
						<div class="item cell">
							<span>{technique.sequence}</span>
						</div>
						<div class="item cell">
							<span>{technique.startIn}</span>
						</div>
						<div class="item cell">
							<span>{technique.class}</span>
						</div>
					</div>
					<div class="group" slot="expanded">
						{#if technique.notes.length > 0}
							<div class="item notes">
								<ol>
									{#each technique.notes as note}
										<li>{note}</li>
									{/each}
								</ol>
							</div>
						{/if}
						{#if technique.learnedDate !== null}
							<div class="item notes">
								{new Date(technique.learnedDate).toDateString()}
							</div>
						{/if}
					</div>
				</ExpandableRow>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.header {
		margin: 0 0 1em 0;

		h1 {
			font-size: 2em;
		}
	}

	h2 {
		font-size: 1.2em;
		font-weight: 600;
		font-variant: small-caps;
	}

	.row {
		.cell {
			padding: 0 0.5em 0 0;
			width: 25%;
		}

		.notes {
			padding: 0.5em 0;

			ol {
				list-style: decimal inside;

				li {
					display: list-item;
					padding: 0 0 0.3em 0;
				}
			}
		}
	}
</style>
