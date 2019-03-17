import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css']
})
export class TableCourseComponent implements OnInit {
  @Input('courses') courses = []; 
  constructor() { }

  ngOnInit() {
  }

}
