import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputInfo } from '../InputInfo';
import { ServiceClassService } from '../service-class.service';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit 
{
  inputinfo: InputInfo=new InputInfo();
  students:any;
  id: any;


  constructor(private obj:ServiceClassService,private router:Router) { }


  ngOnInit(): void {
    let resp = this.obj.getStudents();
    resp.subscribe((data)=>this.students=data);
  }

  public deleteeStudent(id:number)
  {
    let resp=this.obj.deleteStudent(id);
    resp.subscribe((data)=>this.students=data);
  }


  public updateRoutStudent(id:number){
    this.router.navigate(['search',id]);
  }

  // public searchStudent()
  // {
  //   let resp=this.obj.getStudents(this.id);
  //   resp.subscribe((data)=>this.students=data);
  // }


}
