import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/users/user.model';
import { CreateUser } from '../_models/users/create-user.model';
import { UpdateUser } from '../_models/users/update-user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  getOne(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  create(newUser: CreateUser): Observable<User> {
    return this.http.post<User>(this.apiUrl, newUser);
  }

  update(id: string, user: UpdateUser): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${id}`, user);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  findByEmail(email: string): Observable<User> {
    const params = new HttpParams().set('email', email);
    return this.http.get<User>(`${this.apiUrl}/find-by-email`, { params });
  }
}
