import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddClassComponentComponent } from './add-class-component/add-class-component.component';
import { AddClassComponent } from './add-class/add-class.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClassesComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    AddClassComponentComponent,
    AddClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddClassComponent]

})
export class AppModule { }
