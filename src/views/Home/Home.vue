<template>
	<div>
		<v-autocomplete
			v-model="selectedPokemon"
			:loading="loading"
			:items="pokemonResult"
			:search-input.sync="searchPokemon"
			cache-items
			class="mx-4"
			flat
			hide-no-data
			hide-details
			label="Search for a Pokemon"
			solo-inverted
			item-text="name"
			item-value="name"
			clearable
			return-object
		></v-autocomplete>
	</div>
</template>

<script src="./Home.ts" lang="ts"></script>
