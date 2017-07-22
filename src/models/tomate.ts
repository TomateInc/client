export class Tomate {
	name: string;
	action: string;
	params: any;
	
	constructor(obj?: any) {
		this.name = obj && obj.name || '';
		this.action = obj && obj.action || '';
		this.params = obj && obj.params || {};
	}
}
