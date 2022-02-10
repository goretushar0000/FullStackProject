import { Component, OnInit } from '@angular/core';
import { InputInfo } from '../InputInfo';
import { ServiceClassService } from '../service-class.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent implements OnInit {

  inputinfo: InputInfo=new InputInfo();
  message:any;
  

  constructor(private obj:ServiceClassService) { }

  ngOnInit(): void {
  }

  public addNewStudent(){
    let resp=this.obj.addStudent(this.inputinfo);
    resp.subscribe((data)=>this.message=data);
  }

}
