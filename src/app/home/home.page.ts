import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private nativeAudio: NativeAudio,
              private navController: NavController) {}

  ngOnInit() {
    console.log('ngOnInit');

  }


}//class
