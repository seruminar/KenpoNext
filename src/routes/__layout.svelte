<main class="group column item">
	<slot />
</main>

<style lang="scss">
	@import 'src/styles/_mediaQueries.scss';

	:global {
		@import 'node_modules/reset-css/sass/_reset.scss';
		@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;400;600&display=swap');

		* {
			box-sizing: border-box;
		}

		html {
			height: 100%;
			background: black;
			font-family: 'Work Sans', sans-serif;
		}

		body {
			overflow-y: scroll;
		}

		.group {
			display: flex;

			&.column {
				flex-direction: column;
			}
		}

		.item {
			flex: 1;
		}

		strong {
			font-weight: 600;
		}
	}

	main {
		color: rgb(212, 212, 212);
		padding: 1em;
		height: 100%;

		@include respond-above(md) {
			max-width: 80em;
			margin: auto;
		}
	}
</style>
