import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  write(msg: string){
    console.log(new Date().toDateString + ": " + msg) ;
  }
  

}
