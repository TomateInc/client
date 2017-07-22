import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BaseService }  from './base.service';
import { Observable } from 'rxjs/Observable';

import { Config }  from '../config';
import { TomateTemplate }  from '../models/tomate-template';

import 'rxjs/Rx';

@Injectable ()
export class TomateService extends BaseService {
	private tomatesUrl = Config.endPoint + 'tomates';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { super(); }
	
	getTomates (): Observable<TomateTemplate[]> {
		return this.http.get (this.tomatesUrl)
			.map( (responseData) => {
				return responseData.json();
			}).map((tomates: Array<any>) => {
				let result:Array<TomateTemplate> = [];
				if (tomates) {
					tomates.forEach((mod) => {
						result.push(new TomateTemplate(mod));
					});
				}
				return result;
			}).catch (this.handleError);
	}
	
	getTomate (id: string): Observable<TomateTemplate> {
		return this.getTomates ().map (tomates => tomates.find(tomate => tomate.name === id));
	}
}
