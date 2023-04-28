import { Component, OnInit} from '@angular/core';
import{student}from './student';
import{studentservice} from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custompipecreation';
  totalmarks:number;

  constructor(private studentservice:Studentaservice){

  }
  ngOnInit(){
    this.students=this.studentservice.students;
    this.totalmarks=this.studentservice.totalmarks;
  }
}
