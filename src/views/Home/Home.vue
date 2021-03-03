<template>
	<div>
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
			<v-col sm="12">
				<h2>Popular Pokemon</h2>
			</v-col>
		</v-row>
		<v-row>
			<v-col
				class="pokemon-sum"
				v-for="pokemon in popularPokemon"
				:key="`popular-${pokemon.name}`"
				@click="selectedPokemon = pokemon"
			>
				<img :src="pokemon.sprites.front_default" />
				<div class="pokemon-id">#{{ pokemon.id }}</div>
				<div class="pokemon-name">{{ pokemon.name }}</div>
				<v-chip class="mr-2" v-for="type in pokemon.types" :key="type.slot">{{
					type.type.name
				}}</v-chip>
			</v-col>
		</v-row>
	</div>
</template>

<style lang="scss" src="./home.scss" scoped></style>
<script src="./Home.ts" lang="ts"></script>
