import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) { }

  fetch() {
  	return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  insert(post) {
  	return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

}