import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AlertController, FabContainer } from 'ionic-angular';

import { Tomate } from '../../models/tomate';
import { TomateTemplate, TomateParam } from '../../models/tomate-template';
import { TomateService } from '../../services/tomate.service';

@Component ({
	selector: 'tomate-detail-card',
	templateUrl: 'tomate-detail-card.component.html'
})

export class TomateDetailCardComponent implements OnInit {
	@Input ()
	tomate: Tomate;
	
	@Output()
	onRemove: EventEmitter <Tomate> = new EventEmitter();
	
	templates: TomateTemplate[] = [];
	template: TomateTemplate;
	
	constructor (
		public alertCtrl: AlertController,
		private tomateService: TomateService
	) {}

	ngOnInit (): void {
		this.tomateService.getTomates().subscribe(tomates => {
			this.templates = tomates;
			this.actionChange();
		});
	}
	
	actionChange (): void {
		this.tomateService.getTomate (this.tomate.action).subscribe (tom => {
			this.template = tom || this.templates[0];
			// making sure an action is set even if its a new tomate
			this.tomate.action = this.template.name;
		});
	}
	
	remove (fab: FabContainer): void {
		fab.close();
		let confirm = this.alertCtrl.create({
			title: 'Remove tomate?',
			message: `Are you sure you want to remove the tomate '${this.tomate.name}'?`,
			buttons: [
				{ text: 'No' },
				{ text: 'Yes', handler: () => { this.onRemove.emit(this.tomate); } }
			]
		});
		
		confirm.present();		
	}
	
	rename (fab: FabContainer): void {
		fab.close();
		let prompt = this.alertCtrl.create({
			title: 'Rename tomate',
			message: 'Enter a new name for this tomate.',
			inputs: [ { name: 'name', placeholder: 'Name', value: this.tomate.name } ],
			buttons: [
				{ text: 'Cancel' },
				{ text: 'Rename', handler: data => { this.tomate.name = data.name; } }
			]
		});
		
		prompt.present();
	}
	
	get description (): string {
		return (this.template ? this.template.desc : '');
	}
	
	get params (): TomateParam[] {
		return (this.template ? this.template.params : []);
	}
}
