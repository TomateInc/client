import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ModulesComponent }        from '../pages/modules/modules.component';
import { ModulesDetailComponent }     from '../pages/modules-detail/modules-detail.component';
import { ModulesNodeDetailComponent } from '../pages/modules-node-detail/modules-node-detail.component';
import { TomateDetailCardComponent } from '../pages/tomate-detail-card/tomate-detail-card.component';

import { ModuleService }         from '../services/module.service';
import { TomateService }         from '../services/tomate.service';

import { KeysPipe } from '../KeysPipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
		MyApp,
		ModulesComponent,
		ModulesDetailComponent,
		ModulesNodeDetailComponent,
		TomateDetailCardComponent,
		
		KeysPipe
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp, {}, {
		links: [
			{ component: ModulesComponent, name: 'Modules', segment: 'modules', defaultHistory: [] },
			{ component: ModulesDetailComponent, name: 'Module detail', segment: 'modules/:moduleId', defaultHistory: [ModulesComponent] },
			{ component: ModulesNodeDetailComponent, name: 'Node detail', segment: 'modules/:moduleId/:nodeId', defaultHistory: [ModulesComponent] }
		]
	}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
		MyApp,
		ModulesComponent,
		ModulesDetailComponent,
		ModulesNodeDetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
	ModuleService,
	TomateService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
