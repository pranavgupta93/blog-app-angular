import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import {RequestOptions} from '@angular/http';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
@Injectable()
export class HttpserviceService {
  private url='http://localhost:8080/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
  constructor(private _http:HttpClient) {
    console.log("http const");
   }
   public getallblogs=():any=>{
    
    let myresponse=this._http.get(this.url+'allblogs');
    console.log(myresponse);
    return myresponse;
  }
  public getsingleblog=(blogid):any=>{
    let myresponse=this._http.get(this.url+'blogs/'+blogid);
    return myresponse;
  }
  public postBlog=(newblog):any=>{
    
    let myresponse=this._http.post(this.url+'postblog',JSON.stringify(newblog),this.httpOptions);
    return myresponse;
  }
  public deleteblog=(blogid):any=>{
    let data=null;
    let myresponse=this._http.post(this.url+'deleteblog/'+blogid,data);
    return myresponse;
  }
  public updateblog=(blogid,blog:object):any=>{
    console.log("stringify", JSON.stringify(blog));
    let myresponse=this._http.put(this.url+"updateblog/"+blogid,JSON.stringify(blog),this.httpOptions);
    return myresponse;
  }

}
