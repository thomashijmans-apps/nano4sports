import { Component, OnInit } from '@angular/core';
import { SoundsService } from '../../../services/sounds/sounds.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  backBlock:boolean = false;
  sound:string;


  constructor(private soundsService: SoundsService) { }

  ngOnInit() {
  }

  showBackBlock(){

    this.backBlock =! this.backBlock;  
      this.sound = this.soundsService.getAdaptive();
      console.log(this.sound);  
  }

  onDownloadSound(){
    this.soundsService.downloadAdaptive();
  }

  onConnectSound(){
   console.log('sound is connected to keypoint knee');
   
  }

}
