import { Observable } from 'rxjs/Observable';

export class BaseService {	
	protected handleError (error: any): Observable<any> {
		// log error
		// could be something more sofisticated
		let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
		console.error(errorMsg);
		// throw an application level error
		return Observable.throw(errorMsg);
	}
}