import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {

  @Input('courses') courses = []; 
  constructor() { }

  ngOnInit() {
  }

}
