import { Component, OnInit } from '@angular/core';
import { SoundsService } from 'src/app/services/sounds.service';


@Component({
  selector: 'app-soundvfx',
  templateUrl: './soundvfx.page.html',
  styleUrls: ['./soundvfx.page.scss'],
})
export class SoundvfxPage implements OnInit {

  kneeView: boolean = false;
  sound:string;


  constructor(private soundsService: SoundsService) { }

  ngOnInit() {
    
  }

  showSoundView(){

    this.kneeView =! this.kneeView;  
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
