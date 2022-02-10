import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { ContactComponent } from './contact/contact.component';
import { GetListComponent } from './get-list/get-list.component';
import { HomeComponent } from './home/home.component';
import { SearchStudentComponent } from './search-student/search-student.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"getList",component:GetListComponent},
  {path:"search/:id",component:SearchStudentComponent},
  {path:"addNew",component:AddNewStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
