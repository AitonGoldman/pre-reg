import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Observable} from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import { catchError, timeout } from 'rxjs/operators';
import { of }         from 'rxjs/observable/of';


/*
  Generated class for the PssApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PssApiProvider {
    pssHostUrl:string='http://0.0.0.0:8000';        
    loading_instance = null;   
    timeoutInMs:number=10000;
    backendVersion=3;
    
    constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
        console.log('Hello PssApiProvider Provider');
    }
    getApiUrl(){
        return this.pssHostUrl+'/api';
    }
    getBackendHost(){
        return this.pssHostUrl;
    }

    makeHot(cold) {
        const subject = new Subject();
        cold.subscribe(subject);
        return new Observable((observer) => subject.subscribe(observer));
    }
    
    generate_api_call(apiName,url,method,hideLoading?){
        return (...restOfArgs: any[]) => {
            
            let localUrl=url;            
            let postObject=null;            
            if(method=="post" || method=="put" || method=="delete") {
                postObject=restOfArgs.shift();
            }
            let localMatches = localUrl.match(/\:arg/g);
            if (restOfArgs!=null && localMatches!=null && localMatches.length!=restOfArgs.length){
                throw new Error("Oops - number of args in url and args given do not match");
            }
            if(hideLoading==null){
                this.loading_instance = this.loadingCtrl.create({
                    content: 'Please wait...'                
                });
                this.loading_instance.present();        
            }
            
            while (localUrl.indexOf(':arg')>=0) {
                let newUrl=localUrl.replace(":arg",restOfArgs.shift())
                localUrl = newUrl;
            }
            let requestArgs = { withCredentials:true, body:postObject};
            localUrl=localUrl+'?version='+this.backendVersion;

            let request =  this.http.request(method,localUrl,requestArgs).pipe(
                timeout(10000),
                catchError(this.handleError(apiName,null))                    
            );                      
            let result_observable = this.makeHot(request);
            result_observable.subscribe(()=>{if(hideLoading==null){this.loading_instance.dismiss()}});
            return result_observable;            
        }
    }
    createPreRegPlayer = this.generate_api_call('createPreRegPlayer',this.getApiUrl()+"/:arg/prereg_player",'post');        
    completeTicketPurchase = this.generate_api_call('completeTicketPurchase',this.getApiUrl()+"/:arg/prereg-token/:arg",'put');
    
    private handleError<T> (operation = 'operation', result?: T) {                    
        return (error: any): Observable<T> => {                        
            if(error.constructor.name=="TimeoutError"){
                console.log('TIMEOUT IS HAPPENING...');
                //console.log(error)
                error.status=-1;
                error.error={message:"Operation Timed Out.  Please Try Again. "}
            }
            console.error(error); // log to console instead                
            if(error.status!=404){                    
                let error_message = "";
                if(error.status==0){
                    error_message="Internal server error.  Please try again."
                } else {
                    error_message=error.error.message;
                }
                alert(error_message);
                //this.pssToast.showToast(error_message,7000,"dangerToast");                    
            }
            if (error.status==404){
                console.log('found 404...')
                result = {data:null} as any
            }               
            return of(result as T);
        };        
    }            
}
