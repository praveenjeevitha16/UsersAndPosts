import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
    
  }
  
  getUsersList(): Observable<User[]> {
      return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUsersDetails(id): Observable<User> {
      return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+id);
  }


}