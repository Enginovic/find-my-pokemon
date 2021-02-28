<template>
	<v-app>
		<v-main>
			<v-container>
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link>
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>
