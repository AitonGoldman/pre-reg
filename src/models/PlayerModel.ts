export class PlayerModelBuilder {
    first_name: string = null;
    last_name: string = null;
    extra_title: string = null;
    email_address: string = null;    
    player_id: number = null;
    event_player_id: number = null;
    pin_number: number = null;
    
    setFirstName(value: string): PlayerModelBuilder {
        this.first_name=value;
        return this;
    }
    setLastName(value: string): PlayerModelBuilder {
        this.last_name=value;
        return this;
    }
    setExtraTitle(value: string): PlayerModelBuilder {
        this.extra_title=value;
        return this;
    }
    setEmailAddress(value: string): PlayerModelBuilder {
        this.email_address=value;
        return this;
    }
    
    buildFromJson(value: any){
        console.log('DEBUG - buildFromJson');
        console.log(value);
        this.first_name=value['first_name']
        this.last_name=value['last_name']
        this.extra_title=value['extra_title']
        this.player_id=value['player_id']
        this.event_player_id=value['event_player_id']
        this.pin_number=value['pin']
        this.email_address=value['events'][0]['email_address']
        return this;
    }
    
    build(): PlayerModel {
        return new PlayerModel(this);
    }
    
}

export class PlayerModel {
    first_name: string = null;
    last_name: string = null;
    extra_title: string = null;
    email_address: string = null;    
    player_id: number = null;
    event_player_id: number = null;
    pin_number: number = null;

    constructor(playerModelBuilder: PlayerModelBuilder ){
        this.first_name=playerModelBuilder.first_name;
        this.extra_title=playerModelBuilder.extra_title;
        this.last_name=playerModelBuilder.last_name;
        this.email_address=playerModelBuilder.email_address;
        this.player_id=playerModelBuilder.player_id;
        this.event_player_id=playerModelBuilder.event_player_id;
        this.pin_number=playerModelBuilder.pin_number;
        
    }

    
    // get firstName(){
    //     return this.firstName;
    // }
    // get lastName(){
    //     return this.lastName;
    // }
    // get extraTitle(){
    //     return this.extraTitle;
    // }
    // get emailAddress(){
    //     return this.emailAddress;
    // }
        
}
