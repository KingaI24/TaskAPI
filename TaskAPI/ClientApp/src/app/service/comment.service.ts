import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommentService {

    constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    }

    getComments(): Observable<Array<Comment>> {
        return this.httpClient
            .get<Array<Comment>>(this.baseUrl + 'api/comments');
    }

    getComment(id: number): Observable<Comment> {
        return this.httpClient
            .get<Comment>(`${this.baseUrl}api/comments/${id}`);
    }

    saveComment(comment: Comment): Observable<Comment> {
        //console.log(task);
        return this.httpClient
            .post<Comment>(`${this.baseUrl}api/comments`, comment);
    }

    updateComment(comment: Comment): Observable<Comment> {
        return this.httpClient
            .put<Comment>(`${this.baseUrl}api/comments/${comment.id}`, comment);
    }

    deleteComment(id: number): Observable<any> {
        return this.httpClient
            .delete<Comment>(`${this.baseUrl}api/comments/${id}`);
    }
}

export interface Comment {
    id: number;
    text: string;
    important: string;
    taskid: number;
}
