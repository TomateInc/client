<template>
	<div>
		<ul>
			<Device v-for="d in devices" :key="d.id" :device="d"></Device>
		</ul>

		<HelloWorld />
	</div>
</template>

<script>
import Vuex from 'vuex';
import HelloWorld from '@/components/HelloWorld';
import Device from '@/components/Device';
import { mapMultiRowFields } from 'vuex-map-fields';

export default {
	components: {
		HelloWorld,
		Device,
	},
	computed: {
		...mapMultiRowFields(['devices']),
	},
	created() {
		this.loadDevices();
	},
	methods: {
		...Vuex.mapActions(['loadDevices']),
	},
};
</script>
