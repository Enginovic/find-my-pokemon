<template>
	<v-app>
		<v-main>
			<v-container>
				<v-row>
					<v-col>
						<router-link to="/">Home</router-link> |
						<router-link to="/compare-pokemon">Compare Pokemon</router-link>
					</v-col>
				</v-row>
			</v-container>
			<v-container>
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>

<style lang="scss">
.container {
	max-width: 1000px !important;
}

.pokemon-stat {
	font-size: 14px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	border-radius: 3px;
	align-items: center;
	justify-content: center;
	&--hp {
		background-color: #ff5959;
	}
	&--attack {
		background-color: #f5ac78;
	}
	&--defense {
		background-color: #fae078;
	}
	&--special-attack {
		background-color: #9db7f5;
	}
	&--special-defense {
		background-color: #a7db8d;
	}
	&--speed {
		background-color: #fa92b2;
	}
}
</style>
