import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  public blogtitle:string;
  public blogdesc:string;
  public blogcateg:string;
  public blogbody:string;
  public createblog=()=>{
   let newblog={
    blogbody:this.blogbody,
     blogtitle:this.blogtitle,
     blogdesc:this.blogdesc,
     
     blogcateg:this.blogcateg
   };
   this.httpservice.postBlog(newblog).subscribe(
     response=>{
       console.log(response);
       this.toastr.success('Blog created!', 'Success!');
       setTimeout(()=>{
         this.router.navigate(['/viewblog',response.blogid]);
       },1500);
     },
     error=>{
       console.log(error);
     }
   );
  }
  constructor(private httpservice:HttpserviceService,private _route:ActivatedRoute,private router:Router,public toastr: ToastsManager,vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

}
