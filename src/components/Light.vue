<template>
	<div id="light">
		<v-switch v-model="switch1" :label="`Switch: ${switch1.toString()}`"></v-switch>
		<v-color-picker></v-color-picker>
	</div>
</template>

<script>
export default {
	name: 'Light',
	data() {
		return {
			switch1: false,
		};
	},
	methods: {},
};
</script>
