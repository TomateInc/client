import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Node }          from '../../models/node';
import { Module }        from '../../models/module';
import { ModuleService } from '../../services/module.service';

import { ModulesNodeDetailComponent } from '../modules-node-detail/modules-node-detail.component';

@Component ({
	selector: 'modules-detail',
	templateUrl: 'modules-detail.component.html'
})

export class ModulesDetailComponent implements OnInit {
	@Input ()
	module: Module;
	
	constructor (
		private moduleService: ModuleService,
		private navCtrl: NavController,
		public params: NavParams
	) {}

	ngOnInit (): void {
		let id = this.params.get ('moduleId');
		this.moduleService.getModule (id).subscribe (module => {
			this.module = module;
		});
	}
	
	save (): void {
		this.moduleService.update(this.module).subscribe(() => {});
	}
	
	ionViewWillLeave (): void {
		this.save ();
	}
	
	onNodeSelect (node: Node): void {
		//let link = ['modules', this.module.id, 'nodes', node.descId];
		//this.router.navigate(link);
		this.navCtrl.push(ModulesNodeDetailComponent, {
			moduleId: this.module.id,
			nodeId: node.id
		});
	}
}
