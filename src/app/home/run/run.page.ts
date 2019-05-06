import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Gyroscope, GyroscopeOrientation, } from '@ionic-native/gyroscope/ngx';


@Component({
  selector: 'app-run',
  templateUrl: './run.page.html',
  styleUrls: ['./run.page.scss'],
})
export class RunPage implements OnInit {

  runBlock:boolean = true;
  timerBlock:boolean;
  time: number = 0;
  interval;

  constructor(private nativeAudio: NativeAudio,
    private gyroscope: Gyroscope) { }

ngOnInit() {

//all sounds loaded into the memory
this.nativeAudio.preloadSimple('dog', 'assets/sounds/dog.wav');
this.nativeAudio.preloadSimple('horse', 'assets/sounds/horse.wav');


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

//TIMER METHODS
showTimer(){
  this.runBlock =! this.runBlock;
  this.timerBlock =! this.timerBlock;
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
saveData(){
  this.timerBlock =! this.timerBlock;
  this.runBlock =! this.runBlock;
}

}
