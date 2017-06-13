import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdListModule, MdToolbarModule,
   MdGridListModule, MdInputModule, MdSnackBarModule, MdDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionDashboardComponent } from './question-dashboard/question-dashboard.component';
import { QuestionListItemComponent } from './question-list-item/question-list-item.component';
import { QuestionService } from './services/question/question.service';
import { MockQuestionService } from './services/question/mockQuestion.service';
import { AlertService } from './services/alert/alert.service';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { AlertComponent } from './alert/alert.component';
import { DialogComponent } from './alert/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionDashboardComponent,
    QuestionListItemComponent,
    QuestionDetailsComponent,
    AlertComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdToolbarModule,
    MdGridListModule,
    MdInputModule,
    MdSnackBarModule,
    MdDialogModule,
  ],
  entryComponents: [
    DialogComponent,
    AlertComponent,
  ],
  providers: [AlertService, QuestionService, MockQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
