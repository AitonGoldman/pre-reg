import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PlayerModel, PlayerModelBuilder } from '../../models/PlayerModel'
import {  keyframes, trigger,  state,  style,  animate,  transition} from '@angular/animations';
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
    animations: [
        trigger('heroState', [
            state('inactive',style({
                color: 'white'                
            })),
            state('active',style({
                color: 'white'                
            })),
            transition('inactive => active',   animate(300, keyframes([               
                style({opacity: 1, transform: 'translateY(10%)', offset: 0}),
                style({opacity: 1, transform: 'translateY(-50%)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
            ]))),
            transition('active => inactive',   animate(300, keyframes([
                
                style({opacity: 1, transform: 'translateY(10%)', offset: 0}),
                style({opacity: 1, transform: 'translateY(-50%)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
            ])))
        ])
    ]    
})
export class PreRegSummaryPage {
    thisWindow:any = window;
    player: PlayerModel = new PlayerModel(new PlayerModelBuilder());    
    state: any = 'inactive';
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PreRegSummaryPage');
    }
    ionViewWillEnter(){
        if(this.navParams.get('kosher')==undefined){          
            this.navCtrl.push('EventSelectPage');            
            return;
        }
        this.player = this.navParams.get('player');
        console.log(this.player)
        this.toggleState();
    }
    toggleState(){
        this.state = this.state === 'active' ? 'inactive' : 'active';
        setTimeout(()=>{
            this.toggleState();
        },1000)
        
    }
    jumpBack(){
        this.navCtrl.remove(this.navCtrl.getViews().length-1-2,3);
        console.log(this.navCtrl.getViews());       
    }
    
}
