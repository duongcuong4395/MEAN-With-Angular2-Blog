import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	domain = "http://localhost:3000";

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
}
