import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-updateblog',
  templateUrl: './updateblog.component.html',
  styleUrls: ['./updateblog.component.css']
})
export class UpdateblogComponent implements OnInit {
  public currentblog;
  public id=this._route.snapshot.paramMap.get('blogid');
  constructor(private httpservice:HttpserviceService,private router:Router,private _route:ActivatedRoute) { }
  public updateblog=()=>{
    this.httpservice.updateblog(this.id,this.currentblog).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(["/viewblog",this.id]);
      },
      error=>{
        console.log(error);
        console.log("error in updation");
      }
    );
  }
  ngOnInit() {
    this.httpservice.getsingleblog(this.id).subscribe(
      response=>{
        this.currentblog=response;
        console.log(this.currentblog);
      },
      error=>{
        console.log("error");
      }
    );
  }

}
