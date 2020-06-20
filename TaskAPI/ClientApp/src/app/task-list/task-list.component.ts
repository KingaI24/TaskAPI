import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe, Time } from '@angular/common';
import { TaskService } from "../service/task.service";
import { TaskItem } from '../service/task.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})

export class TaskListComponent implements OnInit {
    tasks: Array<TaskItem>;
    selectedTask: TaskItem;
    errorMessage: string;
    userLogged: boolean = false ;
    isClicked: BehaviorSubject<boolean>;

    constructor(private service: TaskService, private router: Router) {
        this.isClicked = new BehaviorSubject<boolean>(false);
    }

    ngOnInit(): void {
        this.getTasks();
        this.userLogged = !!localStorage.getItem('token');
        console.log(this.userLogged);
    }

    getTasks() {
        this.service.getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => this.errorMessage = <any>error
            );
    }

    onSelect(task: TaskItem): void {
        this.selectedTask = task;
    }

    gotoDetail(task: TaskItem): void {
        console.log(this.isClicked);
        this.router.navigate(['task-detail', task.id]);
    }

    updateTask(task: TaskItem): void {
        //this.updateSelected();
        //console.log(this.isClicked);
        //this.router.navigate(['task-detail', task.id]);
        this.router.navigate(['task-update', task.id]);
    }

    updateSelected() {
        this.isClicked.next(true);
    }

    deleteTask(task: TaskItem) {
        this.service.delete(task.id)
            .subscribe(_ => {
                this.getTasks(),
                console.log("Task deleted"),
                error => this.errorMessage = <any>error;
            });
    }

    filterDate(fromDate: Date, fromTime: Time, toDate: Date, toTime: Time) {
        var fromDateTime, toDateTime;
        if (fromDate) {
            fromDateTime = fromDate;
            if (fromTime) {
                fromDateTime = `${fromDateTime}T${fromTime}`;
            }
        }
        if (toDate) {
            toDateTime = toDate;
            if (toTime) {
                toDateTime = `${toDateTime}T${toTime}`;
            }
        }
        this.service.filter(fromDateTime, toDateTime)
            .subscribe(tasks => this.tasks = tasks);
    }

}
