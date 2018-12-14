import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComedyPage } from './comedy';

@NgModule({
  declarations: [
    ComedyPage,
  ],
  imports: [
    IonicPageModule.forChild(ComedyPage),
  ],
})
export class ComedyPageModule {}
