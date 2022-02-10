import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InputInfo } from './InputInfo';

@Injectable({
  providedIn: 'root'
})
export class ServiceClassService {
  deleteeStudent() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  public getStudents(){
    return this.http.get("http://localhost:8080/GETStudents");
  }
  public deleteStudent(id: number)
  {
    return this.http.delete("http://localhost:8080/DELETEStudent/"+id);
  }
  public addStudent(inputinfo: any){
    return this.http.post("http://localhost:8080/POSTStudent",inputinfo,{responseType:'text'});
  }
  public updateStudent(inputinfo: any){
    return this.http.put("http://localhost:8080/PUTStudent",inputinfo,{responseType:'text'});
  }

  public getStudent(id:number){
    return this.http.get("http://localhost:8080/GETStudents/"+id);
  }
}
