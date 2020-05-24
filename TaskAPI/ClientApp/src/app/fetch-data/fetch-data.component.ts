import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})

export class FetchDataComponent {
    public tasks: TaskItem[];
    public comments: Comment[];
    

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

        http.get<TaskItem[]>(baseUrl + 'api/taskitems').subscribe(result => {
            this.tasks = result;
        }, error => console.error(error));

        this.loadComments();
    }

    loadComments() {
        this.http.get<Comment[]>(this.baseUrl + 'api/comments').subscribe(result => {
            this.comments = result;

            console.log(this.comments);

        }, error => console.error(error));
    }
}

interface TaskItem {
    id: number;
    title: string;
    description: string;
    dateAdded: string;
    dateDeadline: string;
    importance: ImportanceList;
    status: StatusList;
    dateClosure: string;
    comments: Comment[];
}

enum ImportanceList { low = 0, medium = 1, high = 2 }

enum StatusList { open = 0, in_progress = 1, closed = 2 }

interface Comment {
    id: number;
    text: string;
    important: Boolean;
    taskid: number;
}
