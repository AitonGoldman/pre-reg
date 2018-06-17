import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { PssApiProvider } from '../providers/pss-api/pss-api';

@NgModule({
  declarations: [
      MyApp
  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      HttpClientModule,      
      FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PssApiProvider
  ]
})
export class AppModule {}
