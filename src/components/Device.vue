<template>
	<component :is="componentName" v-bind="device" />
</template>

<script>
export default {
	name: 'Device',
	props: {
		device: {
			type: Object,
			required: true,
		},
	},
	computed: {
		componentName() {
			//let componentExists = 'componentName' in this.$options.component
			return 'Light';
		},
	},
	methods: {},
};
</script>
