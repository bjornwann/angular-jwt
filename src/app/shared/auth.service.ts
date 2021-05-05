import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl = 'https://laravel-api-heroku.herokuapp.com/';

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/register`, user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/auth/login`, user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/auth/user-profile`);
  }

}