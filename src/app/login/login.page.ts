import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, AlertController, NavController} from '@ionic/angular';
import {AuthenticationService} from '../services/authentication.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  registrationForm: FormGroup;

  constructor(  private formBuilder: FormBuilder,
                private loadingController: LoadingController,
                private alertController: AlertController,
                private authService: AuthenticationService,
                private navController: NavController) { }

 


  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: '',
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  onSignIn(){

    const alertSignIn = this.alertController.create({
      subHeader:'Goodday',
      message: "Thanks for sign IN",
      buttons: ['OK']
    });


    this.loadingController.create({
      keyboardClose: true,
      message: 'loading'
    })
    .then(loadingEl => {
      // 1
      loadingEl.present();
      // 2
      this.authService.signIn(this.registrationForm.value.email, this.registrationForm.value.password)
      .then(() => { 
        // 3
        loadingEl.dismiss();
        // 4
        alertSignIn
        .then((alertSignInEl)=>{
          alertSignInEl.present();
          //ga naar de volgende pagina of alert met thanks for loggin in
          this.navController.navigateForward('/home');
        })
        .catch();
      })
      .catch((error) => {
        // 1
        loadingEl.dismiss();
        // 2
        this.alertController.create({
          subHeader: 'Oops',
          message: error.message,
          buttons: [ {
            text: 'OK',
            role: 'OK',
            handler: () => {
              this.registrationForm.reset();
            }
          }]
        })
        .then((alertControllerEl) => {
          alertControllerEl.present();
        }).catch();
      });
    });

    }//onSignUp

}//class
