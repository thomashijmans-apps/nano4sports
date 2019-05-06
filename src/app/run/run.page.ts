import { Component, OnInit } from '@angular/core';

import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Gyroscope, GyroscopeOrientation, } from '@ionic-native/gyroscope/ngx';


@Component({
  selector: 'app-run',
  templateUrl: './run.page.html',
  styleUrls: ['./run.page.scss'],
})
export class RunPage implements OnInit {

  constructor(private nativeAudio: NativeAudio,
              private gyroscope: Gyroscope) { }

  ngOnInit() {
   console.log('the ngoninit method is called');

   //all sounds loaded into the memory
   this.nativeAudio.preloadSimple('dog', 'assets/sounds/dog.wav');
   this.nativeAudio.preloadSimple('horse', 'assets/sounds/horse.wav');
   

  }

  startRun() {
    this.startGyro();
  }

  startGyro() {
   this.gyroscope.getCurrent()
   .then((orientation: GyroscopeOrientation) => {
      console.log(orientation.x);
   });

   this.gyroscope.watch()
   .subscribe((orientation: GyroscopeOrientation) => {

    if (orientation.x < 0){
      console.log('sounds from the left' + orientation.x);
      this.nativeAudio.play('dog');
    } else if ( orientation.x > 0) {
      console.log('sounds from right' + orientation.x);
      this.nativeAudio.play('horse');
    }
   });

  }
}
