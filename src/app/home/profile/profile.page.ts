import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, AlertController, NavController} from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProfileService } from 'src/app/services/profile.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  // VARS
  profileInfoForm: FormGroup;
  profileInfoObject = {};


  constructor(  private formBuilder: FormBuilder,
                private loadingController: LoadingController,
                private alertController: AlertController,
                private authService: AuthenticationService,
                private navController: NavController,
                private profileService: ProfileService) { }

  ngOnInit() {
    this.profileInfoForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      gender: '',
      length: '',
      weight: '',
      birthday: ''
    });
  }

  ionViewWillEnter(){

    this.profileService.getProfileInfo()
    .then((value) => {

      if (value.exists) {

        this.profileInfoObject = value.data();
          for (let key in this.profileInfoObject) {
            this.profileInfoObject = {
              name: this.profileInfoObject[key].name,
              gender: this.profileInfoObject[key].gender,
              length: this.profileInfoObject[key].length,
              weight: this.profileInfoObject[key].weight,
              birthday: this.profileInfoObject[key].birthday,
            };        
          }
          // loading.dismiss();
      } 
      else {
        // loading.dismiss();
        console.log('value not exist');
      }

    })
    .catch(err => {
        // loading.dismiss().then(()=>{
        //   alertNoConnection.present();
        // })

    });
    
  }

  onSaveProfileInfo() {
    this.profileService.postProfileInfo(this.profileInfoForm.value);

  }

}//claSss
