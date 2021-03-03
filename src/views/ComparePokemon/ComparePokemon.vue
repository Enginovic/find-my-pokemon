<template>
	<v-container>
		<v-row>
			<v-col>
				Pick 2 Pokemon you want to compare
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-autocomplete
					v-model="selectedPokemon1"
					:items="pokemonResult"
					:search-input.sync="searchPokemon1"
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
			<v-col>
				<v-autocomplete
					v-model="selectedPokemon2"
					:items="pokemonResult"
					:search-input.sync="searchPokemon2"
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
			<v-col v-for="pokemon in pokemonData" :key="pokemon.name" sm="6">
				<v-row>
					<v-col>
						<img class="pokemon-image" :src="pokemon.sprites.front_default" />
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12" v-for="stat in pokemon.stats" :key="stat.stat.name">
						<div
							class="pokemon-stat"
							:class="`pokemon-stat--${stat.stat.name}`"
						>
							<div>{{ stat.base_stat }}</div>
							<div>{{ stat.stat.name }}</div>
						</div>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script src="./ComparePokemon.ts" lang="ts"></script>
