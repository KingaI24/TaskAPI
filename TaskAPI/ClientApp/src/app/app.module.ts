import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './service/task.service';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { AddcommentComponent } from './task-update/task-update.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';


import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentService } from './service/comment.service';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        TaskListComponent,
        TaskDetailComponent,
        TaskNewComponent,
        TaskUpdateComponent,
        AddcommentComponent,
        RegistrationComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatTableModule,
        MatDialogModule,
        MatButtonModule,
        MatSelectModule,
        MatListModule,
        MatGridListModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        MatIconModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'task-list', component: TaskListComponent },
            { path: 'task-detail/:id', component: TaskDetailComponent },
            { path: 'task-new', component: TaskNewComponent },
            {
                path: 'task-update/:id', component: TaskUpdateComponent,
                children: [
                    { path: '', component: AddcommentComponent }
                ]
            },
            //{ path: 'task-update/:id', component: AddcommentComponent },
            { path: 'login', component: LoginComponent },
            { path: 'registration', component: RegistrationComponent }
        ]),
    ],
    exports: [CoreModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSelectModule, MatTableModule, MatSortModule, MatTooltipModule, MatIconModule],
    providers: [TaskService, CommentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
