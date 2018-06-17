import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PssApiProvider } from '../../providers/pss-api/pss-api';
import { PlayerModel, PlayerModelBuilder } from '../../models/PlayerModel'
/**
 * Generated class for the PayPreRegFeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var StripeCheckout: any;


@IonicPage()
@Component({
  selector: 'page-pay-pre-reg-fee',
  templateUrl: 'pay-pre-reg-fee.html',
})
export class PayPreRegFeePage {
    displayReturnMessage: boolean = false;
    displayStripe: boolean = false;    
    player: PlayerModel = null;    
    stripePublicKey: string = null;    
    loadingStripe = true;
    stripeSuccess: boolean = false;
    stripeFailure: boolean = false;
    
    constructor(public navCtrl: NavController,
                public navParams: NavParams,                
                public pssApi: PssApiProvider,
                public platform: Platform) {
    }
        
    ionViewDidEnter() {            
        if(this.navParams.get('kosher')==undefined){          
            this.navCtrl.push('HomePage');
            return;
        }
        this.player = this.navParams.get('player');
        this.stripePublicKey = this.navParams.get('stripePublicKey')
        console.log(this.player);
        this.launchStripe(this.navParams.get('tokenPurchaseId'),"blah");
        // this.pssApi.getEvent('1').subscribe((results)=>{
        //     this.stripePublicKey = results['data']['stripe_public_key'];
        // this.launchStripe('ppp',"blah")
        // })
    }
    
    launchStripe(tokenPurchaseId, purchaseSummary){
        
        let handler = StripeCheckout.configure({
            key: this.stripePublicKey,
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            email: this.player.email_address,
            allowRememberMe: false,
            opened: ()=>{
                this.loadingStripe=false;                
            },
            closed: ()=>{
                if(this.stripeSuccess==false){
                    this.displayReturnMessage=true;
                }                                
            },
            
            //            token: function(token) {
            token : (token)=>{
                this.stripeSuccess=true;
                this.pssApi.completeTicketPurchase({stripe_token:token.id,email:token.email},3,tokenPurchaseId)
                    .subscribe((results)=>{
                        
                        if(results != null){
                            this.navCtrl.push('PreRegSummaryPage',{player:this.player,kosher:true});                                                    
                        } else {
                            this.navCtrl.push('HomePage');                                                                                
                            return;
                        }
                        
                    })                                                  

                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });
        handler.open({
            name: 'Intergalactic Registration',            
            zipCode: false,
            amount: 100*20
        });
    }
    
}
