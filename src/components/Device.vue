<template>
	<component :is="computedComponent" v-bind="device" />
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
		computedComponent() {
			console.log(this.device);

			return () => {
				let comp = import('@/devices/' + this.device.config.type);
				console.log('comp');
				console.log(comp);
				comp = import('@/devices/Light');
				console.log(comp);
				return comp;
			};
		},
	},
	methods: {},
};
</script>
