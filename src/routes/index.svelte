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
	let allHeaderKeys: string[] = [];
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
			if (techniquesMetadataEntry.header) {
				allHeaderKeys.push(filterKey);
			}

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
	<label class="group">
		<p>Random</p>
		<button
			class={random ? 'on' : 'off'}
			on:click={() => {
				random = !random;
				sorted = false;
			}}
		/>
	</label>
</div>
<div class="group column">
	<div class="group row">
		{#if techniques.length > 0}
			{#each allHeaderKeys as headerKey}
				<div class={`item cell ${headerKey}`}>
					<h2>{techniquesMetadata[headerKey].name}</h2>
					{#if filterKeys.indexOf(headerKey) > -1}
						<Filter bind:value={filters[headerKey]} options={filterOptions[headerKey]} />
					{/if}
				</div>
			{/each}
		{/if}
	</div>
	{#each filteredTechniques as technique (technique.name)}
		<div class="group row">
			<div class="item">
				<ExpandableRow>
					<div class="group">
						<div class="item cell name">
							<strong>{technique.name}</strong>
						</div>
						<div class="item cell belt">
							<span>{technique.belt}</span>
						</div>
						<div class="item cell sequence">
							<span>{technique.sequence}</span>
						</div>
						<div class="item cell class">
							<span>{technique.class}</span>
						</div>
					</div>
					<div class="group" slot="expanded">
						{#if technique.learnedDate !== null}
							<div class="item notes">
								{new Date(technique.learnedDate).toDateString()}
							</div>
						{/if}
						{#if technique.attack !== null}
							<div class="item notes">
								{technique.attack}
							</div>
						{/if}
						{#if technique.startIn !== null}
							<div class="item notes">
								{technique.startIn}
							</div>
						{/if}
						{#if technique.notes.length > 0}
							<div class="item notes">
								<ol>
									{#each technique.notes as note}
										<li>{note}</li>
									{/each}
								</ol>
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

		label {
			align-items: center;

			button {
				position: relative;
				width: 5em;
				height: 2.5em;
				padding: 0;
				margin: 0 0 0 0.5em;
				background: grey;
				border: none;
				border-radius: 0.8em;

				&:before {
					position: absolute;
					content: '';
					height: 2em;
					width: 2em;
					left: 0.25em;
					bottom: 0.25em;
					border-radius: 0.8em;
					background-color: white;
					transition: 0.2s;
					transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
				}

				&.on:before {
					background-color: greenyellow;
					transform: translateX(2.5em);
				}
			}
		}
	}

	h2 {
		font-size: 1.2em;
		font-weight: 600;
		font-variant: small-caps;
	}

	.row {
		.cell {
			padding: 0.2em;
			word-break: break-all;

			&.name {
				strong {
					font-size: 2em;
				}
			}

			&.belt {
				flex: 0.4;
			}

			&.sequence {
				flex: 0.2;
			}

			&.startIn {
				flex: 0.6;
			}

			&.class {
				flex: 0.4;
			}
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
