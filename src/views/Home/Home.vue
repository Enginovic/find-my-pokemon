<template>
	<v-container>
		<v-row>
			<v-col>
				<v-autocomplete
					v-model="selectedPokemon"
					:loading="loading"
					:items="pokemonResult"
					:search-input.sync="searchPokemon"
					cache-items
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
			</v-col>
		</v-row>
		<v-row>
			<v-col xs="12">
				<h2>Popular Pokemon</h2>
			</v-col>
		</v-row>
		<v-row>
			<v-col
				class="pokemon-sum"
				xs="3"
				v-for="pokemon in popularPokemon"
				:key="`popular-${pokemon.name}`"
				@click="selectedPokemon = pokemon"
			>
				<img :src="pokemon.sprites.front_default" />
				<div class="pokemon-id">#{{ pokemon.id }}</div>
				<div class="pokemon-name">{{ pokemon.name }}</div>
				<span
					class="pokemon-types"
					v-for="type in pokemon.types"
					:key="type.slot"
					>{{ type.type.name }}</span
				>
			</v-col>
		</v-row>
	</v-container>
</template>

<style lang="scss" src="./home.scss" scoped></style>
<script src="./Home.ts" lang="ts"></script>
