import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UsersService } from './testing/services/users.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';

import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from "@angular/material/menu";
import { MatSelectModule } from '@angular/material/select';
import {FileUploadModule} from "@iplab/ngx-file-upload";
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgClass } from '@angular/common';
import {NgxEditorModule, Editor, Toolbar} from "ngx-editor";

import { HomeComponent } from './public/pages/home/home.component';
import { AboutComponent } from './public/pages/about/about.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { UserCreateAndEditComponent } from './testing/components/user-create-and-edit/user-create-and-edit.component';
import { UserManagementComponent } from './testing/pages/user-management/user-management.component';
import { ProjectCreateAndEditComponent } from './project-management/components/project-create-and-edit/project-create-and-edit.component';
import { ProjectsApiService } from './project-management/services/projects-api.service';
import { CustomizerSettingsComponent } from './shared/components/customizer-settings/customizer-settings.component';
import { ProjectListComponent } from './project-management/pages/project-list/project-list.component';
import { DpStartDateComponent } from './shared/components/datepicker/dp-start-date/dp-start-date.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    UserCreateAndEditComponent,
    UserManagementComponent,
    ProjectCreateAndEditComponent,
    CustomizerSettingsComponent,
    ProjectListComponent,
    DpStartDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    FileUploadModule,
    MatDividerModule,
    NgScrollbarModule,
    NgClass,
    NgxEditorModule,
    MatProgressBarModule,
    MatNativeDateModule,
  ],
  providers: [
    provideAnimationsAsync(), UsersService, ProjectsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
