import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})
export class BlogviewComponent implements OnInit {
  //public allblogs=[];
  public currentblog;
  public id=this.route.snapshot.paramMap.get('blogid');
  constructor(public httpservice:HttpserviceService,public route:ActivatedRoute,public router:Router) { }
   public deleteblog=():any=>{
     //console.log(this.currentblog.blogId);
     //console.log(id);
     this.httpservice.deleteblog(this.id).subscribe(
      response=>{
        console.log(response);
        console.log("deleted!!!");
        this.router.navigate(['/home']);
      },
      error=>{
        console.log(error);
      }
     );
   } 
  ngOnInit() {
    this.httpservice.getsingleblog(this.id).subscribe(
      data=> {
        this.currentblog=data;
      }
    );

}
}