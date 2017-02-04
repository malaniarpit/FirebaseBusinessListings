import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBpPRKzWUnlA6dV7BAtlk8uQLKZaNQTYKU",
    authDomain: "businesscontracts-c2002.firebaseapp.com",
    databaseURL: "https://businesscontracts-c2002.firebaseio.com",
    storageBucket: "businesscontracts-c2002.appspot.com",
    messagingSenderId: "175729266929"
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
