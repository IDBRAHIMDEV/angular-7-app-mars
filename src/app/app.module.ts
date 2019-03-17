
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';

import { VotesComponent } from './votes/votes.component';
import { CardCourseComponent } from './card-course/card-course.component';
import { TableCourseComponent } from './table-course/table-course.component';
import { PostsComponent } from './posts/posts.component';

//Import Modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    VotesComponent,
    CardCourseComponent,
    TableCourseComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
