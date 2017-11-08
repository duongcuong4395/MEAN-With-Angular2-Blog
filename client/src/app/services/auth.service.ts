import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

	domain = "http://localhost:3000";

  authToken;
  user;
  options;

  constructor(private http: Http) { }

  //connect api register User
  registerUser(user) {
  	return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  checkUsername(username) {
  	if(!username){
  		return this.http.get(this.domain + '/authentication/').map(res => res.json());
  	} else {
  		return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(res => res.json());
  	}
  }

  checkEmail(email) {
  	if(!email){
  		return this.http.get(this.domain + '/authentication/').map(res => res.json());
  	} else {
  		return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(res => res.json());
  	} 
  }

  login(user) {
    return this.http.post(this.domain + '/authentication/login', user).map(res => res.json());
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  storeUserData(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  createAuthenticationHeaders() {
      this.loadToken();
      this.options = new RequestOptions({
        headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': this.authToken
        })
      })
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  getProfile() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/authentication/profile', this.options).map(res => res.json());
  }

  
  loggedIn() {
    return tokenNotExpired();
  }

  getPublicProfile(username) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/authentication/publicProfile/' + username, this.options).map(res => res.json());
  }

  forgotpasswordUser(user) {
    return this.http.post(this.domain + '/authentication/forgotpassword', user, this.options).map(res => res.json());
  }

  changePasswordUser(username, email, user) {
    return this.http.put(this.domain + '/authentication/changepassword/'+ username + '/'+ email, user, this.options).map(res => res.json());
  }
}
