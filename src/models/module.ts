import { Node }  from './node';

export class Module {
	id: string;
	name: string;
	type: string;
	host: string;
	port: number;
	nodes: Node[];

	get displayName (): string {
		return (this.name ? this.name : `${this.type} (${this.id})`);
	}

	constructor(obj: any) {
		this.id = obj.id;
		this.name = obj.name;
		this.type = obj.type;
		this.host = obj.host;
		this.port = obj.port;
		this.nodes = [];

		if (obj.nodes) {
			obj.nodes.forEach((node) => {
				this.nodes.push(new Node(node));
			});
		}
	}
}
