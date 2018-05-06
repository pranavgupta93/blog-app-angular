import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allblogs=[];
  constructor(public httpservice:HttpserviceService) {
    console.log("constructor");
   }

  ngOnInit() {
    this.httpservice.getallblogs().subscribe(
      data1=>{
        console.log(data1);
        this.allblogs=data1;
      },
      error=>{

      }
    );
    
    console.log("all blogs "+this.allblogs);
  }

}
