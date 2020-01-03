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
			return () => this.computeComponent();
		},
	},
	methods: {
		async computeComponent() {
			let comp = null;
			let err = true;
			let devType = this.device.config.type;

			while (err) {
				try {
					err = false;
					comp = await import('@/devices/' + devType);
				} catch {
					err = true;

					// jump one up in type
					let n = devType.lastIndexOf('/');
					if (n === -1) {
						return import('@/devices/default');
					} else {
						devType = devType.substring(0, n);
					}
				}
			}

			return comp;
		},
	},
};
</script>
