import { Component, Input, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { TaskService } from '../service/task.service';
import { TaskItem } from '../service/task.service';
import { Location } from '@angular/common';
import { ValidationError } from '../core/core.models';

@Component({
    selector: 'app-task-new',
    templateUrl: './task-new.component.html'
})

export class TaskNewComponent implements OnInit {

    @Input() task: TaskItem;
    private errorMessages = [];

    constructor(private service: TaskService,
        private location: Location) {
    }

    ngOnInit() {
    }

    save(title, description, datedDeadline, timeDeadline, importance, status) {
        const id = 0;
        const dateAdded = null;
        const dateClosure = null;
        var comments = new Array<Comment>()
        var dateDeadline;
        if (datedDeadline) {
            dateDeadline = datedDeadline;
            if (timeDeadline) {
                dateDeadline = `${datedDeadline}T${timeDeadline}`;
            }
        }
        this.service.save({
            id, title, description, dateAdded, dateDeadline, importance, status, dateClosure, comments
        }).subscribe(
            () => {
                console.log("completed");
                this.goBack();
                    },
            (err) => {
                console.log("Err in saving client: ", err);
                console.log(err);
                this.errorMessages=err;
            }
        );
    }

    goBack() {
        this.location.back();
    }

}
