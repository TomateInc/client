<template>
	<div>
		<v-container fluid>
			<v-row dense>
				<v-col v-for="d in devices" :key="d.id" :cols="6">
					<Device :device="d"></Device>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import Vuex from 'vuex';
import Device from '@/components/Device';

export default {
	components: {
		Device,
	},
	computed: {
		devices() {
			return this.$store.state.devices;
		},
	},
	created() {
		this.loadDevices();
	},
	methods: {
		...Vuex.mapActions(['loadDevices']),
	},
};
</script>
