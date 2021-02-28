<template>
	<div>
		<input @input="debounceMe" />
		<v-alert type="success"></v-alert>
		<div v-for="pokemon in pokemonList" :key="pokemon.id">
			{{ pokemon.name }}
		</div>
	</div>
</template>

<script src="./Home.ts" lang="ts"></script>
