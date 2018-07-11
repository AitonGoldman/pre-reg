import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PssApiProvider } from '../../providers/pss-api/pss-api';
import { PlayerModel, PlayerModelBuilder } from '../../models/PlayerModel'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CollectPlayerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment: 'collect/:tournamentId/:eventId'
})
@Component({
  selector: 'page-collect-player-info',
  templateUrl: 'collect-player-info.html',
})
export class CollectPlayerInfoPage {
    player: PlayerModel  = new PlayerModelBuilder().build();
    stripePublickKey: string = null;
    tournamentId: any = null;
    eventId: any = null;
    
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public pssApi: PssApiProvider,
                public alertCtrl: AlertController,
                public platform: Platform) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CollectPlayerInfoPage');
        this.tournamentId = this.navParams.get('tournamentId');
        this.eventId = this.navParams.get('eventId');        
    }
    ionViewDidEnter() {
    }
    onSubmit(){        
        this.pssApi.createPreRegPlayer({players:[this.player]},this.eventId,this.tournamentId)
            .subscribe((results)=>{
                if(results == null){
                    return;
                }
                if(results['status']=='created' || results['status']=='unpaid'){                    
                    this.navCtrl.push('PayPreRegFeePage',{player:new PlayerModelBuilder().buildFromJson(results['data']).build(),kosher:true,stripePublicKey:results['stripe_key'],tokenPurchaseId:results['token_purchase']['token_purchase_id'],tournamentId:this.tournamentId,eventId:this.eventId});                    
                    return;
                }
                
                const alert = this.alertCtrl.create({
                    title: 'Already Registered',
                    subTitle: 'The player '+this.player.first_name+' '+this.player.last_name+' '+this.player.extra_title+' is already registered.  If you have not already registered, try filling in (or changing) the extra title to distinguish yourself',
                    buttons: ['OK']
                });
                alert.present();                                    
            });        
    }
}
