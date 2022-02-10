import { Component, OnInit } from '@angular/core';
import { InputInfo } from '../InputInfo';
import { ServiceClassService } from '../service-class.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputinfo: InputInfo=new InputInfo();
  students:any;
  id: any;

  constructor(private obj:ServiceClassService) { }

  ngOnInit(): void {
  }

  public searchStudent()
  {
    let resp=this.obj.getStudent(this.id);
    resp.subscribe((data)=>this.students=data);
  }

}
