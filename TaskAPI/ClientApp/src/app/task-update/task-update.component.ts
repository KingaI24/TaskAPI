import { Component, OnInit, Input, Inject, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService, TaskItem, ImportanceList, StatusList } from '../service/task.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment, CommentService } from '../service/comment.service';

@Component({
    selector: 'app-task-update',
    templateUrl: './task-update.component.html',
})
/** task-update component*/
export class TaskUpdateComponent implements OnInit {

    @Input() task: TaskItem;

    public updateForm: FormGroup;

    public importanceList = [
        { value: 0, name: "low" },
        { value: 1, name: "medium" },
        { value: 2, name: "high" }];

    public statusList = [
        { value: 0, name: "open" },
        { value: 1, name: "in progress" },
        { value: 2, name: "closed" }];

    public errorMessages = <any>[];

    constructor(private service: TaskService,
        private route: ActivatedRoute,
        private location: Location,
        public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.service.getTask(+params['id']))
            .subscribe(task => {
                this.task = task;
                this.initializeFormControls();
            });
    }

    initializeFormControls(): void {
        this.updateForm = new FormGroup({
            id: new FormControl(this.task.id, Validators.required),
            title: new FormControl(this.task.title, Validators.required),
            description: new FormControl(this.task.description, Validators.required),
            dateAdded: new FormControl(this.task.dateAdded),
            dateDeadline: new FormControl(this.task.dateDeadline),
            importance: new FormControl((this.task.importance)),
            status: new FormControl(this.task.status),
            dateClosure: new FormControl(this.task.dateClosure),
        })
    }

    goBack() {
        this.location.back();
    }

    onFormSubmit() {
        console.log(this.updateForm.value);
        this.service.update(this.updateForm.value)
            .subscribe(
                err => this.errorMessages = err,
                () => console.log('Task update complete'));
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(AddcommentComponent, {
            width: '250px',
            data: { }
        });

        dialogRef.afterClosed().subscribe(
        );
    }
   
}

interface DialogData {
    text: string;
    importance: string;
}

@Component({
    selector: 'addComment',
    templateUrl: 'addComment.html',
})

export class AddcommentComponent implements OnInit {

    @Input() task: TaskItem;

    constructor(
        private service: CommentService,
        public dialogRef: MatDialogRef<AddcommentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ngOnInit() {
        this.task = this.task;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    saveComment(text, important) {
        const id = 0;
        console.log(this.task);
        const taskid = this.task.id;
        this.service.saveComment({
            id, text, important, taskid
        }).subscribe(
            (err) => {
                console.log("Err in saving comment: ", err);
            },
            () => console.log("completed"));
    }

}
