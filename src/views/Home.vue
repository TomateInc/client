<template>
	<div v-masonry transition-duration="0.3s" item-selector=".item">
		<v-container fluid>
			<v-row dense>
				<v-col v-for="d in devices" :key="d.id" cols="12" md="6" lg="4" xl="3" v-masonry-tile class="item">
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
	name: 'Home',
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
	mounted() {
		this.$redrawVueMasonry();
	},
	methods: {
		...Vuex.mapActions(['loadDevices']),
	},
};
</script>
