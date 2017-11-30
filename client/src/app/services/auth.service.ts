import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

	//domain = "http://localhost:3000";
  domain = "";
  authToken;
  user;
  options;

  constructor(private http: Http) { }

  //connect api register User
  registerUser(user) {
  	return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }


  forgotpasswordUser(user) {
    return this.http.post(this.domain + '/authentication/forgotpassword', user).map(res => res.json());
  }

  changePasswordUser(username, email, user) {
    return this.http.put(this.domain + '/authentication/changepassword/'+ username + '/'+ email, user).map(res => res.json());
  }

  uploadFile(formData) {
    return this.http.post(this.domain + '/upload', formData).map(files => files.json());
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

  getProfileWithID(idUser) {
    return this.http.get(this.domain + '/authentication/profileWithID/' + idUser, this.options).map(res => res.json());
  }

  socialLogin(authName, name, idUser) {
    return this.http.post(this.domain + '/authentication/sociallogin/' + authName + '/' + name + '/' + idUser, this.options).map(res => res.json());
  }

  login(user) {
    return this.http.post(this.domain + '/authentication/login', user, this.options).map(res => res.json());
  }

  updateHistoryLogin(username) {
    return this.http.post(this.domain + '/authentication/updateUserHistoryLoginInMonth/' + username, this.options).map(res => res.json());
  }
  
  getUserUserHistoryLoginInMonth(username, month, year) {
    return this.http.get(this.domain + '/authentication/getUserUserHistoryLoginInMonth/' + username + '/' + month + '/' + year).map(res => res.json());
  }

  updateHistoryWriteBlog(username) {
      return this.http.post(this.domain + '/authentication/updateUserHistoryWriteBlogInMonth/' + username, this.options).map(res => res.json());
    }
  
    getUserUserHistoryWriteBlogInMonth(username, month, year) {
      return this.http.get(this.domain + '/authentication/getUserUserHistoryWriteBlogInMonth/' + username + '/' + month + '/' + year).map(res => res.json());
    }

  updateHistoryCommentBlog(username) {
    return this.http.post(this.domain + '/authentication/updateUserHistoryCommentBlogInMonth/' + username, this.options).map(res => res.json());
  }
  
  getUserHistoryCommentBlogInMonth(username, month, year) {
    return this.http.get(this.domain + '/authentication/getUserHistoryCommentBlogInMonth/' + username + '/' + month + '/' + year).map(res => res.json());
  }

  updateHistoryLikeBlog(username) {
    return this.http.post(this.domain + '/authentication/updateUserHistoryLikeBlogInMonth/' + username, this.options).map(res => res.json());
  }
  
  getUserHistoryLikeBlogInMonth(username, month, year) {
    return this.http.get(this.domain + '/authentication/getUserHistoryLikeBlogInMonth/' + username + '/' + month + '/' + year).map(res => res.json());
  }

  updateHistoryDislikeBlog(username) {
    return this.http.post(this.domain + '/authentication/updateUserHistoryDislikeBlogInMonth/' + username, this.options).map(res => res.json());
  }
  
  getUserHistoryDislikeBlogInMonth(username, month, year) {
    return this.http.get(this.domain + '/authentication/getUserHistoryDislikeBlogInMonth/' + username + '/' + month + '/' + year).map(res => res.json());
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

  createUsername(user) {
    this.createAuthenticationHeaders();
    return this.http.put(this.domain + '/authentication/createUsername', user, this.options).map(res => res.json());
  }

  
  loggedIn() {
    return tokenNotExpired();
  }

  getPublicProfile(username) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/authentication/publicProfile/' + username, this.options).map(res => res.json());
  }

}
