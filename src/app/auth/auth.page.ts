import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

 constructor(private navController: NavController) {}
  
  ngOnInit() {
    console.log('ngOnInit');
  
  }
  
  goToRunPage() {
  console.log('go to run page');
  this.navController.navigateForward('/run');
  }
  
  pushToSignPage() {
    console.log('go to run page');
    this.navController.navigateForward('/sign');
    }
  
  pushToLoginPage() {
    console.log('go to run page');
    this.navController.navigateForward('/login');
    }
}//class







