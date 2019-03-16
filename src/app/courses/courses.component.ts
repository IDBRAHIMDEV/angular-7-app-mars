import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  showList = true;
  editable = false;
  title = "Page of my Courses";
  myCourse = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    active: false
  };
  courses = [
    {id: 1, name: 'Angular 7', price: 125.785, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus', active: true},
    {id: 2, name: 'Laravel', price: 27.7864, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus', active: true},
    {id: 3, name: 'Symfony', price: 5.72745, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus ', active: true},
    {id: 4, name: 'Spring BOOT', price: 15.127, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus', active: false},
  ];

  image = "https://avatars0.githubusercontent.com/u/6206647?s=460&v=4";

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
   
    if(this.myCourse.name == '') {
      return;
    }
    // Assign the ID to my current id
    this.myCourse.id = this.courses.length + 1;

    //Add myCourse to courses list
    this.courses.unshift(this.myCourse);
    
    //initialize the current course 
    this.initCourse();
  }

  initCourse() {
     //initialize the current course 
     this.myCourse = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      active: false
    };
  }

  deleteCourse(index) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.courses.splice(index, 1);
        Swal.fire(
          {
            title: 'Course is deleted',
            text: 'You will not be able to recover this imaginary file!',
            type: 'success',
            timer: 3000
          }
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


    
   
    
  }

  editCourse(course) {
    this.myCourse = course
    this.editable = true
  }

  updateCourse() {
   
    this.editable = false
    //initialize the current course 
    this.initCourse();
  }

  toggleCourse(course) {
    course.active = !course.active;
  }

  showModeDisplay(etat) {
    this.showList = etat;
  }

}
