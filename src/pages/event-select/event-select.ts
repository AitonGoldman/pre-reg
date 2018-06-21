import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { PssApiProvider } from '../../providers/pss-api/pss-api';
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
})

export class EventSelectPage {
    contentWidth:string='100%';
    //events:any = [];
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
                     if(tournament['scoring_style'].toLowerCase() == "herb_limited" && event.active==true){
                         tournament['event_id']=event.event_id;
                         this.tournaments.push(tournament);
                     }                    
                 }
             }            
        })        
    }    
}
