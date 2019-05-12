import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-run',
  templateUrl: './run.page.html',
  styleUrls: ['./run.page.scss'],
})
export class RunPage implements OnInit {

 
  
  textBlock:boolean = false;
  runBlock:boolean = false;
  timerBlock:boolean = true;
  disableButton:boolean;
  showSaveButton:boolean;
  showStartButton:boolean = true;
  stopButton:boolean =true;

  optionsBlock:boolean = false;
  interval;
  stopProp:string = "stop";

  minute:boolean;
  sec: number = 0;
  min: number = 0;

 

  constructor(  private nativeAudio: NativeAudio,
                private deviceMotion: DeviceMotion,
                private navController: NavController) { }
              

  ngOnInit() {
    // All sounds loaded into the memory
    this.nativeAudio.preloadComplex('back', 'assets/sounds/lowerback.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('wind', 'assets/sounds/wind.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('adaptive', 'assets/sounds/adaptive.mp3', 0.1, 1, 0);



  }

 

  startDeviceMotion() {

    let option: DeviceMotionAccelerometerOptions = {
      frequency:1000
    }
    this.deviceMotion.watchAcceleration(option).subscribe((acceleration: DeviceMotionAccelerationData) => {
      if(acceleration.x > 3){
        console.log(acceleration.x);
        this.nativeAudio.play('back');
      }
      else if (acceleration.x < -3){
        console.log(acceleration.x);
        this.nativeAudio.play('wind');

      }
      else{
        console.log('you walk fine');   
      }
    });
  }
  

  //TIMER METHODS
  
  showTimer(){
    this.textBlock =! this.textBlock;
    this.runBlock =! this.runBlock;
    this.optionsBlock =! this.optionsBlock;
    this.timerBlock =! this.timerBlock;
  }

  startTimer() {
    this.nativeAudio.loop('adaptive');

    this.stopProp="stop";
    this.stopButton = false;
    // 0
    this.disableButton =! this.disableButton;
    // 1
    this.startDeviceMotion();
    // 2
    this.interval = setInterval(() => {
      if(this.sec >= 0) {
        this.sec++;
        if(this.sec >= 60) {
          this.sec = 0;
          this.min++;
          if(this.min == 1 && this.sec == 0) {
            this.minute =! this.minute;
          }
          this.interval();
        }
      }
      else {
        console.log('interval problem');
        
      }
    },1000);
  }


  resetTimer(){
    if(this.stopProp == "resume"){
    clearInterval(this.interval);
    this.min = 0;
    this.sec = 0;
    this.disableButton = false;
    this.showStartButton =! this.showStartButton;
    this.showSaveButton =! this.showSaveButton;
    this.stopProp = "stop";
    this.stopButton = true;
    }
    else{
      
      
    }
  }

  stopTimer(){

    this.nativeAudio.stop('adaptive');

    if(this.sec == 0){
      this.stopButton = false;
    }

    else if(this.stopProp == "stop"){
      clearInterval(this.interval);
      this.showStartButton =! this.showStartButton;
      this.showSaveButton =! this.showSaveButton;
      this.stopProp = "resume";
    }
    else if (this.stopProp == "resume"){
      this.stopProp = 'stop';
      this.startTimer();
      this.showSaveButton =! this.showSaveButton;
      this.showStartButton =! this.showStartButton;
      this.disableButton =! this.disableButton;
    }
    else{
      console.log(this.stopProp);
      
    }
    //alert
    // this.timerBlock =! this.timerBlock;
    // this.runBlock =! this.runBlock;
    // this.optionsBlock =! this.optionsBlock;
    // this.textBlock =! this.textBlock;
  }

  pushToRunSettings(){
    this.timerBlock =! this.timerBlock;
    this.runBlock =! this.runBlock;
    this.optionsBlock =! this.optionsBlock;
    this.textBlock =! this.textBlock;
    this.disableButton = false;
  }
  onSaveRun(){

  }

}
