import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { PssApiProvider } from '../../providers/pss-api/pss-api';
import {  keyframes, trigger,  state,  style,  animate,  transition} from '@angular/animations';
/**
 * Generated class for the EventSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-event-select',
    templateUrl: 'event-select.html',
    animations: [
        trigger('heroState', [
            state('inactive',style({
                backgroundColor: '#eee'                
            })),
            state('active',style({
                backgroundColor: '#eee'                
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

export class EventSelectPage {
    contentWidth:string='100%';
    //events:any = [];
    state: any = 'inactive'
    tournaments:any = [];
    constructor(public navCtrl: NavController,
                public platform: Platform,
                public navParams: NavParams,
                public pssApi: PssApiProvider ) {
        if(!platform.is('mobile')){
            this.contentWidth="50%"
        }
    }

    goHome(tournament){        
        if(tournament.checked==true){
            this.navCtrl.push('HomePage',{tournamentId:tournament.tournament_id,eventId:tournament.event_id});
        } else {
            tournament.checked=false;
        }        
        
        //tournament.checked=tournament.checked==false;
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad EventSelectPage');
        this.pssApi.getEvents().subscribe((results)=>{
             for(let event of results['data']){
                 console.log(event)
                 for(let tournament of event['tournaments']){                    
                     if(tournament['scoring_style'].toLowerCase() == "herb_limited" && tournament.active==true){
                         tournament['event_id']=event.event_id;
                         this.tournaments.push(tournament);
                     }                    
                 }
             }            
        })        
    }    
}
