import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PlayerModel, PlayerModelBuilder } from '../../models/PlayerModel'

/**
 * Generated class for the PreRegSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-reg-summary',
  templateUrl: 'pre-reg-summary.html',
})
export class PreRegSummaryPage {
    player: PlayerModel = new PlayerModel(new PlayerModelBuilder());    
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PreRegSummaryPage');
    }
    ionViewWillEnter(){
        if(this.navParams.get('kosher')==undefined){          
            //this.navCtrl.push('HomePage');
            //return;
        }
        this.player = this.navParams.get('player');
        console.log(this.player)
    }
}
