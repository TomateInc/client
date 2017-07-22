import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BaseService }  from './base.service';
import { Observable } from 'rxjs/Observable';

import { Config }  from '../config';
import { Module }  from '../models/module';
import { Node }  from '../models/node';

import 'rxjs/Rx';

@Injectable ()
export class ModuleService extends BaseService {
	private modulesUrl = Config.endPoint + 'modules';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { super(); }
	
	getModules (): Observable<Module[]> {
		return this.http.get (this.modulesUrl)
			.map( (responseData) => {
				return responseData.json();
			}).map((modules: Array<any>) => {
				let result:Array<Module> = [];
				if (modules) {
					modules.forEach((mod) => {
						result.push(new Module(mod));
					});
				}
				return result;
			}).catch (this.handleError);
	}
	
	getModule (id: string): Observable<Module> {
		return this.getModules ().map (modules => modules.find(module => module.id === id));
	}
	
	update (module: Module): Observable<Module> {
		const url = `${this.modulesUrl}/${module.id}`;
		return this.http
			.put(url, JSON.stringify(module), {headers: this.headers})
			.catch(this.handleError);
	}

	updateNodeTomates (mod: Module, node: Node) {
		var url = `${this.modulesUrl}/${mod.id}/nodes/${node.id}/tomates`;
		return this.http
			.put(url, JSON.stringify(node.tomates), {headers: this.headers})
			.catch(this.handleError);
	};
}
