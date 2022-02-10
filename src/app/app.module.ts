import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetListComponent } from './get-list/get-list.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceClassService } from './service-class.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetListComponent,
    SearchStudentComponent,
    AddNewStudentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ServiceClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
