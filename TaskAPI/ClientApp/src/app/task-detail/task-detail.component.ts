import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TaskItem } from '../service/task.service';
import { TaskService } from '../service/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommentService } from '../service/comment.service';
import { Comment } from '@angular/compiler';

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html'
})
/** task-detail component*/
export class TaskDetailComponent implements OnInit {

    @Input() task: TaskItem;
    @Input() comment: Comment;

    constructor(private service: TaskService,
        private commentService: CommentService,
        private route: ActivatedRoute,
        private location: Location) {
    }

    displayedColumns: string[] = ['text', 'important', 'action'];

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.service.getTask(+params['id']))
            .subscribe(task => this.task = task);
    }

    goBack(): void {
        this.location.back();
    }

    deleteComment(id: number) {

        this.commentService.deleteComment(id).subscribe(x => {
            this.goBack();
        });
    }

}
