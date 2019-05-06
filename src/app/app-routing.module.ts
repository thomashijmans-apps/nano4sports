import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'sign', loadChildren: './sign/sign.module#SignPageModule' },
  // { path: 'run', loadChildren: './run/run.module#RunPageModule' },
  
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'profile', loadChildren: './home/profile/profile.module#ProfilePageModule' },
  // { path: 'run', loadChildren: './home/run/run.module#RunPageModule' },
  // { path: 'data', loadChildren: './home/data/data.module#DataPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
