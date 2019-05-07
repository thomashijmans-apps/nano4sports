import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient,
    private afs: AngularFirestore,
    private afsAuth: AngularFireAuth
                                    ) { }


postData(runData){

    //CODE FOR ANGULARFIRE2
    let userId = this.afsAuth.auth.currentUser.uid;
    this.afs.collection('users').doc(userId).set({runData})
      .then(()=>{
        console.log(runData);
      })
      .catch((error)=>{
        console.log(error);
      });
  }
}






}//class
