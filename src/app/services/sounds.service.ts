import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';


@Injectable({
  providedIn: 'root'
})

export class SoundsService {

  constructor(public http: HttpClient,
              private afsStorage: AngularFireStorage,
              private afsAuth: AngularFireAuth
              ) { }

    getSounds():any{

      const refSounds = this.afsStorage.storage.ref('sounds').child('dog.wav');
      return refSounds.name;
       
    }

    downloadSound(){
      const refSounds = this.afsStorage.storage.ref('sounds').child('dog.wav').getDownloadURL()
      .then((url)=>{
        console.log(url);
        this.http.get(url)
      })
      .catch();

    }


}//class
