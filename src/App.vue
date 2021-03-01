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
</style>
