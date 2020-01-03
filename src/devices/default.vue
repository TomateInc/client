<template>
	<v-card>
		<v-card-title v-text="name"></v-card-title>

		<v-card-text>No device ui implementation found for "{{ type }}".</v-card-text>
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
		type: {
			type: String,
			required: true,
		},
	},
};
</script>
