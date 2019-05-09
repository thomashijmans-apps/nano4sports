import { Component, OnInit } from '@angular/core';
import { SoundsService } from '../../../services/sounds/sounds.service';



@Component({
  selector: 'app-soundvfx',
  templateUrl: './soundvfx.page.html',
  styleUrls: ['./soundvfx.page.scss'],
})
export class SoundvfxPage implements OnInit {


  backBlock:boolean = false;
  kneeBlock:boolean = false;
  tiptoedBlock: boolean = false;
  sound:string;


  constructor(private soundsService: SoundsService) { }

  ngOnInit() {
    
  }

  showBackBlock(){

    this.backBlock =! this.backBlock;  
      this.sound = this.soundsService.getSounds();
      console.log(this.sound);  
  }
  showKneeBlock(){

    this.kneeBlock =! this.kneeBlock;  
      this.sound = this.soundsService.getSounds();
      console.log(this.sound);  
  }
  showTiptoedBlock(){

    this.tiptoedBlock =! this.tiptoedBlock;  
      this.sound = this.soundsService.getSounds();
      console.log(this.sound);  
  }

  onDownloadSound(){
    this.soundsService.downloadSound();
  }

  onConnectSound(){
   console.log('sound is connected to keypoint knee');
   
  }

}
