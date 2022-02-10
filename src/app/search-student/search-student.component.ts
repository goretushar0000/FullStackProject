import { Component, OnInit } from '@angular/core';
import { InputInfo } from '../InputInfo';
import { ServiceClassService } from '../service-class.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
  inputinfo: InputInfo=new InputInfo();
  message: any;
  id:any;

  constructor(private obj:ServiceClassService) { }

  ngOnInit(): void {
  }
  public updateThisStudent()
  {
    let resp=this.obj.updateStudent(this.inputinfo);
    resp.subscribe((data)=>this.message=data);
  }

  

}
