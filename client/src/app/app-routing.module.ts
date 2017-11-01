import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';

//component: LoginComponent - Login route
//canActivate: [AuthGuard] - user must be logged in to view this route
//canActivate: [NotAuthGuard] - user must Not be logged in to view this route
//path: '**' catch-all route
const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'dashboard' , component: DashboardComponent, canActivate: [AuthGuard]},
  { 
    path: 'login' , 
    component: LoginComponent, 
    canActivate: [NotAuthGuard]
  },

  { 
    path: 'profile' , 
    component: ProfileComponent, 
    canActivate: [AuthGuard]
  },
  { path: 'register' , component: RegisterComponent, canActivate: [NotAuthGuard]},
  { path: 'blog' , component: BlogComponent, canActivate: [AuthGuard]},
	{ path: '**' , component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
      appRoutes
    )],
  providers: [],
  bootstrap: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
