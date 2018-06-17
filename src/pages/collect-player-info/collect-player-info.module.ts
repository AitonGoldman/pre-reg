import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectPlayerInfoPage } from './collect-player-info';

@NgModule({
  declarations: [
    CollectPlayerInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectPlayerInfoPage),
  ],
})
export class CollectPlayerInfoPageModule {}
