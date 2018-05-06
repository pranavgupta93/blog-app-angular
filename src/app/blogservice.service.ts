import { Injectable } from '@angular/core';

@Injectable()
export class BlogserviceService {
  private alldata=[
    {
      blogid:1,
      blogname:"blog 1",
      blogdesc:"blog desc 1"
    },
    {
      blogid:2,
      blogname:"blog 2",
      blogdesc:"blog desc 2"
    },
    {
      blogid:3,
      blogname:"blog 3",
      blogdesc:"blog desc 3"
    },
    {
      blogid:4,
      blogname:"blog 4",
      blogdesc:"blog desc 4"
    }
  ];
  public getallblogs=():any=>{
    return this.alldata;
  }
  constructor() { }

}
