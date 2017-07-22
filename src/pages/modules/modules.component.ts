import { Component, OnInit } from '@angular/core';
import { NavController }     from 'ionic-angular';

import { Module }        from '../../models/module';
import { ModuleService } from '../../services/module.service';

import { ModulesDetailComponent } from '../modules-detail/modules-detail.component';

@Component ({
	selector: 'modules',
	templateUrl: 'modules.component.html'
})
export class ModulesComponent implements OnInit {
	modules: Module[] = [];
	
	constructor (
		private navCtrl: NavController,
		private moduleService: ModuleService
	) { }

	ngOnInit (): void {
	}
	
	ionViewDidEnter (): void {
		// we wait to get this ti'll we enter so the titles are updated
		this.moduleService.getModules().subscribe(modules => this.modules = modules);
	}
	
	gotoDetail (module: Module): void {
		this.navCtrl.push(ModulesDetailComponent, {
			moduleId: module.id
		});
	}
}
