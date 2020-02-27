import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OjasService {

  constructor(private ht: HttpClient, private myRoute: Router) { }

  getDetails() {
   return this.ht.get('http://localhost:3000/posts');
  }
  po(d) {
    return this.ht.post('http://localhost:3000/posts', d);
  }
  de(d) {
    return this.ht.delete('http://localhost:3000/posts/' + d);
  }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token);
  }
  getToken() {
    return localStorage.getItem("LoggedInUser");
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["home"]);
  }
}
