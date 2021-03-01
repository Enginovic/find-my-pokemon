<template>
	<div class="pokemon-detail">
		<v-row v-if="isLoadingPokemon">
			Catching pokemon...
		</v-row>
		<v-row v-if="!isLoadingPokemon">
			<v-col v-if="pokemon">
				<img class="pokemon-image" :src="pokemon.sprites.front_default" />
			</v-col>
			<v-col>
				<v-row>
					<v-col>
						<div class="pokemon-id">#{{ pokemon.id }}</div>
						<h1 class="pokemon-name">{{ pokemon.name }}</h1>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12">
						<h6>Type</h6>
					</v-col>
					<v-col>
						<v-chip
							class="pokemon-type mr-2"
							v-for="type in pokemon.types"
							:key="type.type.name"
							>{{ type.type.name }}
						</v-chip>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12">
						<h6>Stats</h6>
					</v-col>
					<v-col sm="4" v-for="stat in pokemon.stats" :key="stat.stat.name">
						<div
							class="pokemon-stat"
							:class="`pokemon-stat--${stat.stat.name}`"
						>
							<div>{{ stat.base_stat }}</div>
							<div>{{ stat.stat.name }}</div>
						</div>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12">
						<h6>Meta</h6>
					</v-col>
					<v-col class="pokemon-meta">
						<v-chip class="mr-2">Height: {{ pokemon.height | toM }} m</v-chip>
						<v-chip>Weight: {{ pokemon.weight | toKg }} kg</v-chip>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12">
						<h6>Abilities</h6>
					</v-col>
					<v-col>
						<span
							class="pokemon-ability"
							v-for="ability in pokemon.abilities"
							:key="ability.ability.name"
						>
							{{ ability.ability.name }}
						</span>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts" src="./Pokemon.ts"></script>
<style lang="scss" src="./pokemon.scss" scoped></style>
