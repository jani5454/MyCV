import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnicalPage } from './technical';

@NgModule({
  declarations: [
    TechnicalPage,
  ],
  imports: [
    IonicPageModule.forChild(TechnicalPage),
  ],
})
export class TechnicalPageModule {}
