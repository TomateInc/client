export class TomateParam {
	name: string;
	desc: string;
	valueType: string;
	
	constructor(obj?: any) {
		this.name = obj && obj.name || '';
		this.desc = obj && obj.desc || '';
		this.valueType = obj && obj.valueType || '';
	}
}

export class TomateTemplate {
	name: string;
	desc: string;
	params: TomateParam[];
	
	constructor(obj?: any) {
		this.name = obj && obj.name || '';
		this.desc = obj && obj.desc || '';
		this.params = [];

		if (obj && obj.params) {
			obj.params.forEach((param) => {
				this.params.push(new TomateParam(param));
			});
		}
	}
}
