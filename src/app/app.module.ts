import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { BlogserviceService } from './blogservice.service';
import { HttpserviceService } from './httpservice.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateblogComponent } from './createblog/createblog.component';
import { UpdateblogComponent } from './updateblog/updateblog.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogviewComponent,
    CreateblogComponent,
    UpdateblogComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'viewblog/:blogid',component:BlogviewComponent},
      {
        path:'create',component:CreateblogComponent
      },
      {
        path:'',redirectTo:'home',pathMatch:'full'
      },
      {
        path:'edit/:blogid',component:UpdateblogComponent
      }
    ])
  ],
  providers: [BlogserviceService,HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
