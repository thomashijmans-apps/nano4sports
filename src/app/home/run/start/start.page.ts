import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
// import { clearInterval } from 'timers';



@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private nativeAudio: NativeAudio,
              private gyroscope: Gyroscope) { }


    time: number = 0;
    interval;
    

    ngOnInit() {
      console.log('the ngoninit method is called');
   
      //all sounds loaded into the memory
      this.nativeAudio.preloadSimple('dog', 'assets/sounds/dog.wav');
      this.nativeAudio.preloadSimple('horse', 'assets/sounds/horse.wav');
      
   
     }
  
   
    
     startGyro() {

      let options: GyroscopeOptions = {
        frequency: 1000
     }
      this.gyroscope.getCurrent(options)
      .then((orientation: GyroscopeOrientation) => {
         console.log(orientation.x);
      })
      .catch();
   
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


  startTimer() {
    // 1
    this.startGyro();
    // 2
    this.interval = setInterval(() => {
      if(this.time >= 0) {
        this.time++; 
      } 
      else {
        console.log('interval problem');
        
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer(){
    clearInterval(this.interval);
    this.time = 0;
  }

}//class
