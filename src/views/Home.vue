<template>
	<div>
		<ul>
			<li v-for="d in devices" :key="d._id">{{ d.name }}</li>
		</ul>

		<Light></Light>

		<HelloWorld />
	</div>
</template>

<script>
import Vuex from 'vuex';
import HelloWorld from '@/components/HelloWorld';
import Light from '@/components/Light';
import { mapMultiRowFields } from 'vuex-map-fields';

export default {
	components: {
		HelloWorld,
		Light,
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
