import Handlers from './handlers';
import store from '@/store';

export default function configureEventSources() {
	const eventSource = new EventSource(`${process.env.VUE_APP_ROOT_API}/events`);

	eventSource.onopen = (e) => {
		console.log('The connection has been established.');
		store.dispatch('loadDevices');
	};

	for (const handler of Handlers) {
		eventSource.addEventListener(handler.eventType, event => {
			handler.handle(event);
		});
	}
};
