import { Injectable, Inject } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from "@angular/common/http";
import 'rxjs-compat';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PaginatedTaskView } from './paginatedTaskView';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class TaskService {

    constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    }

    getTasks(event?: PageEvent): Observable<PaginatedTaskView> {
        //let pageIndex = event ? event.pageIndex + "" : "0";
        //let itemsPerPage = event ? event.pageSize + "" : "3";
        let pageIndex = event ? event + "" : "0";
        let itemsPerPage = "3";
        let params = new HttpParams().set("page", pageIndex).set("itemsPerPage", itemsPerPage); //Create new HttpParams
        return this.httpClient
            .get<PaginatedTaskView>(`${this.baseUrl}api/taskitems`, { params: params });
    }

    getTask(id: number): Observable<TaskItem> {
        return this.httpClient
            .get<TaskItem>(`${this.baseUrl}api/taskitems/${id}`);
    }

    save(task: TaskItem): Observable<TaskItem> {
        return this.httpClient
            .post<TaskItem>(`${this.baseUrl}api/taskitems`, task);
    }

    update(task: TaskItem): Observable<TaskItem> {
        return this.httpClient
            .put<TaskItem>(`${this.baseUrl}api/taskitems/${task.id}`, task);
    }

    delete(id: number): Observable<any> {
        return this.httpClient
            .delete<TaskItem>(`${this.baseUrl}api/taskitems/${id}`);
    }

    filter(fromDate: string, toDate: string): Observable<PaginatedTaskView>{
        if (!fromDate) fromDate = "";
        if (!toDate) toDate = "";
        return this.httpClient.get<PaginatedTaskView>(`${this.baseUrl}api/taskitems?from=${fromDate}&to=${toDate}`);
    }
}

export interface TaskItem {
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

export enum ImportanceList { low = 0, medium = 1, high = 2 }

export enum StatusList { open = 0, in_progress = 1, closed = 2 }
