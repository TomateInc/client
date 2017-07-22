import { Component, Input, OnInit }       from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


import { Node }          from '../../models/node';
import { Module }        from '../../models/module';
import { Tomate }        from '../../models/tomate';
import { ModuleService } from '../../services/module.service';

@Component ({
	selector: 'modules-node-detail',
	templateUrl: 'modules-node-detail.component.html'
})

export class ModulesNodeDetailComponent implements OnInit {
	@Input ()
	module: Module;
	@Input ()
	node: Node;
	
	constructor (
		private moduleService: ModuleService,
		private navCtrl: NavController,
		public params: NavParams,
		public alertCtrl: AlertController
	) {}

	ngOnInit (): void {
		let id = this.params.get ('moduleId');
		let descId = this.params.get ('nodeId');

		this.moduleService.getModule (id).subscribe(module => {
			this.module = module;
			this.node = this.module.nodes.find(node => node.id === descId);
		});
	}

	save (): void {
		this.moduleService.updateNodeTomates(this.module, this.node).subscribe(() => {});
	}
		
	ionViewWillLeave (): void {
		this.save ();
	}

	goBack (): void {
		this.navCtrl.pop();
	}
	
	removeTomate (tom: Tomate): void {
		let index: number = this.node.tomates.indexOf(tom);
		if (index !== -1) {
			this.node.tomates.splice(index, 1);
		}
	}
	
	addTomate (): void {
		let prompt = this.alertCtrl.create({
			title: 'Create tomate',
			message: "Enter a name for this new tomate you're so keen on adding.",
			inputs: [ { name: 'name', placeholder: 'Name' } ],
			buttons: [
				{ text: 'Cancel' },
				{ text: 'Create', handler: data => { this.node.tomates.push(new Tomate(data)); } }
			]
		});
		
		prompt.present();
	}
}
