import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController} from '@ionic/angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';



@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {

  registrationForm: FormGroup;

  constructor(  private formBuilder: FormBuilder,
                private authService: AuthenticationService,
                private loadingController: LoadingController,
                private alertController: AlertController,
                private navController: NavController) { }




  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: '',
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }



  onSignUp() {

    const alertSignUp = this.alertController.create({
      subHeader:'Goodday',
      message: "Thanks for signing UP",
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
        this.authService.signUp(this.registrationForm.value.email, this.registrationForm.value.password)
        .then(() => { 
          // 3
          loadingEl.dismiss();
          // 4
          alertSignUp
          .then((alertSignInEl)=>{
            alertSignInEl.present();
            // 5
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
          })
          .catch();
        });
      });

  }//onSignUp

}//class