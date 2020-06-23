import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService, TaskItem, ImportanceList, StatusList } from '../service/task.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { Comment, CommentService } from '../service/comment.service';

@Component({
    selector: 'app-task-update',
    templateUrl: './task-update.component.html',
})
/** task-update component*/
export class TaskUpdateComponent implements OnInit {

    @Input() task: TaskItem;

    public updateForm: FormGroup;

    private errorMessagesTask = [];

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
                () => console.log('Task update complete'),
                err => {
                    this.errorMessages = err;
                    console.log(err);
                });
    }

    openDialog(id: number): void {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            dialogTaskId: id
        };

        const dialogRef = this.dialog.open(AddcommentComponent, dialogConfig
        );

        dialogRef.afterClosed().subscribe(result => {
        });

        const dialogSubmitSubscription =
            dialogRef.componentInstance.submitClicked.subscribe(result => {
                dialogSubmitSubscription.unsubscribe();
            });
   
    }
}

interface DialogData {
    dialogTaskId: number;
    dialogText: string;
    dialogImportant: boolean;
}

@Component({
    selector: 'addComment',
    templateUrl: 'addComment.html',
})

export class AddcommentComponent implements OnInit {

    dialogTaskId: number;
    dialogText: string;
    dialogImportant: boolean;
    @Output() submitClicked = new EventEmitter<any>();
    private errorMessagesComment = [];

    constructor(
        private service: CommentService,
        public dialogRef: MatDialogRef<AddcommentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ngOnInit() {
        this.dialogTaskId = this.data.dialogTaskId;
        console.log(this.dialogTaskId);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    saveComment(text, important) {
        const id = 0;
        const taskid = this.data.dialogTaskId;
        this.service.saveComment({
            id, text, important, taskid
        }).subscribe(
            () => console.log("completed"),
            (err) => {
                console.log("save not possible");
                this.errorMessagesComment = err;
                console.log(this.errorMessagesComment);
            });
    }
}
