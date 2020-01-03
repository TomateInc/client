<template>
	<v-container>
		<v-layout text-center wrap>
			<v-flex xs12>
				<v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
			</v-flex>

			<v-flex mb-4>
				<h1 class="display-2 font-weight-bold mb-3">
					Welcome to Tomate
				</h1>
				<p class="subheading font-weight-regular">
					For help and collaboration with other Vuetify developers,
					<br />please join our online
					<a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
				</p>
			</v-flex>

			<v-flex xs12 mb-5>
				<h2 class="headline font-weight-bold mb-3">Important Links</h2>

				<v-layout justify-center>
					<a v-for="(link, i) in importantLinks" :key="i" :href="link.href" class="subheading mx-3" target="_blank">
						{{ link.text }}
					</a>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		importantLinks: [
			{
				text: 'Documentation',
				href: 'https://todo.com',
			},
		],
	}),
};
</script>
