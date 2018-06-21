import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PlayerModel, PlayerModelBuilder } from '../../models/PlayerModel'

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {    
    tournamentId: any = null;
    eventId: any = null;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform) {
    }
    
    ionViewDidLoad() {        
        console.log('ionViewDidLoad HomePage');
        console.log(this.navParams)        
        this.tournamentId = this.navParams.get('tournamentId');
        this.eventId = this.navParams.get('eventId');        
    }

}
