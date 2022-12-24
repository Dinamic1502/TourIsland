import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
public url = environment.url;
public posts$ = new Subject<Post[]>(); //comunica un aray
public post$ = new Subject<Post>(); // comunica un post
public posts: Post[] = [];
public post: Post;
  constructor(
    public http:HttpClient
  ) { }
  
  all$(): Observable<Post[]>{
    return this.posts$.asObservable();
  }
  all(): Observable<any> {
    this.posts = [];
return this.http.get<Post[]>(this.url + '/administradors')
.pipe(
  map ((res: any[]) =>{
    res.forEach((item: any)=>{
      this.post = new Post();
      this.post.set(item);
      this.posts.push(this.post);
    });
    this.posts$.next(this.posts);
  })
);

  }
}
