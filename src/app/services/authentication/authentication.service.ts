import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';



@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(public http: HttpClient,
              private afAuth: AngularFireAuth) {}

  signIn(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  signUp(email: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

}
