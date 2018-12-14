import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorrorPage } from './horror';

@NgModule({
  declarations: [
    HorrorPage,
  ],
  imports: [
    IonicPageModule.forChild(HorrorPage),
  ],
})
export class HorrorPageModule {}
