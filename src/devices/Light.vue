<template>
	<div>
		<span>{{ name }}</span>
		<v-switch v-model="switch1" :label="`Switch: ${switch1.toString()}`"></v-switch>
		<!-- <v-color-picker></v-color-picker> -->
	</div>
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
