import { Tomate }  from './tomate';

export class Node {
	id: string;
	value: string;
	valueType: string;
	canSet: boolean;
	tomates: Tomate[];

	constructor(obj: any) {
		this.id = obj.id;
		this.value = obj.value;
		this.valueType = obj.valueType;
		this.canSet = obj.canSet;
		this.tomates = [];
		
		if (obj.tomates) {
			obj.tomates.forEach((tom) => {
				this.tomates.push(new Tomate(tom));
			});
		}
	}
}
