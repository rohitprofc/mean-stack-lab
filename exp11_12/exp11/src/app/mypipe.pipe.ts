// mypipe.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(p:any): string {
    if(p.gender=="M"){
      return `Hello Mister ${p.name}`
      }
      else{
      return `Hello Miss ${p.name}`
      }
  }
}