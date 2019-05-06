import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public http: HttpClient,
              private afs: AngularFirestore,
              private afsAuth: AngularFireAuth) { }

  postProfileInfo(profileInfo){

    //CODE FOR ANGULARFIRE2
    let userId = this.afsAuth.auth.currentUser.uid;
    this.afs.collection('users').doc(userId).set({profileInfo})
      .then(()=>{
        console.log(profileInfo + 'from provider');
        console.log('guestInfo is set');
      })
      .catch((error)=>{
        console.log(error + 'from provider');
      });
  }

  getProfileInfo():any{

    let userId = this.afsAuth.auth.currentUser.uid;
    return  this.afs.collection('users').doc(userId).ref.get();
  }

}//class
