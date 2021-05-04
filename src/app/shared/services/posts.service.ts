import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface Post {
    title: Object;
    content: Object;
    date: String;
}

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts: Array<Post>;
    post: Post;

    constructor(private http: HttpClient) { }
    public getPosts(): Observable<Array<Post>> {

        return new Observable<Array<Post>>(observer => {

            this.loadPosts().subscribe(
                response => {
                    if (response) {
                        this.posts = response;
                        observer.next(this.posts);
                        observer.complete();
                    } else {
                        observer.error(response);
                    }
                },
                error => {
                    observer.error(error);
                }
            )

        });
    }

    loadPosts(): Observable<Array<Post>> {
        let url = "https://natelaclaire.com/wp-json/wp/v2/posts";

        return this.http.get<Array<Post>>(url);
    }

    public getPost(slug: string): Observable<Post> {

        return new Observable<Post>(observer => {

            this.loadPost(slug).subscribe(
                response => {
                    if (response) {
                        this.post = response[0];
                        observer.next(this.post);
                        observer.complete();
                    } else {
                        observer.error(response);
                    }
                },
                error => {
                    observer.error(error);
                }
            )

        });
    }

    loadPost(slug: string): Observable<Post> {
        let url = "https://natelaclaire.com/wp-json/wp/v2/posts?slug=" + slug;
        return this.http.get<Post>(url);
    }
}
