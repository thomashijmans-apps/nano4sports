import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';





import { AuthenticationService } from './services/authentication/authentication.service';
import { ProfileService } from './services/profile/profile.service';
import { SoundsService } from './services/sounds/sounds.service';


import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Gyroscope} from '@ionic-native/gyroscope/ngx';

import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,AngularFireAuthModule,AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,

    AuthenticationService,
    ProfileService,
    SoundsService,

    NativeAudio,
    Gyroscope,
    DeviceMotion,
   
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
