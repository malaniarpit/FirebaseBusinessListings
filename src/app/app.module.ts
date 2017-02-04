import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBwtPpV_xS_jsEC-GmIoxqaWhC0CkojhBo",
    authDomain: "businesscontracts-287a5.firebaseapp.com",
    databaseURL: "https://businesscontracts-287a5.firebaseio.com",
    storageBucket: "businesscontracts-287a5.appspot.com",
    messagingSenderId: "118235912637"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
