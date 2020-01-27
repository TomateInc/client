<template>
	<v-card>
		<v-card-title v-text="name"></v-card-title>

		<v-card-subtitle>{{ display }}</v-card-subtitle>
	</v-card>
</template>

<script>
export default {
	name: 'Sensor',
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		state: {
			type: Object,
			required: true,
		},
		config: {
			type: Object,
			required: true,
		},
	},
	computed: {
		display() {
			let d = this.state.value;
			if (d && d.toPrecision) {
				d = d.toFixed(1);
			}

			return d + this.config.unit;
		},
	},
};
</script>
