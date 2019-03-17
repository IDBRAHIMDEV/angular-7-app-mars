import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { VotesComponent } from './votes/votes.component';
import { CardCourseComponent } from './card-course/card-course.component';
import { TableCourseComponent } from './table-course/table-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    VotesComponent,
    CardCourseComponent,
    TableCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
