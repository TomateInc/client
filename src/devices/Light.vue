<template>
	<v-card>
		<v-card-title v-text="name"></v-card-title>

		<v-card-actions>
			<v-spacer></v-spacer>
			<v-switch v-model="switch1" :label="`Switch: ${switch1.toString()}`"></v-switch>
			<!-- <v-color-picker></v-color-picker> -->

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-bookmark</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-share-variant</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: 'Light',
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			switch1: false,
		};
	},
	methods: {},
};
</script>
