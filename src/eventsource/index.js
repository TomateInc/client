import Handlers from './handlers';

export default function configureEventSources() {
	const eventSource = new EventSource(`${process.env.VUE_APP_ROOT_API}/events`);
	for (const handler of Handlers) {
		eventSource.addEventListener(handler.eventType, event => {
			handler.handle(event);
		});
	}
};
