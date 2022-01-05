import { Injectable } from '@angular/core';
import { Worker } from "src/app/models/workers/worker";
import { LogService } from 'src/app/services/log/log.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private logServ: LogService,
    private http: HttpClient) { }

  id: number = 6;
  workers: Worker[] = [];

  getWorkers(): Worker[] {

    const headers = { 'x-access-token': environment.api_token };
    this.http.get<any>(environment.api_url + "/worker/list?company=18", { headers }).subscribe(data => {
      
      data.forEach((el: any) => {
        this.workers.push(
          new Worker(el.id, el.name, new Date(), true)
        ) ; 
      });
      
    });

    this.logServ.write("Getting " + this.workers.length  + " workers from main data") ;
    return this.workers ;
  }

  addWorker(data: any): void {
    if (data.name == null || data.name.trim() == "" || this.id == null)
      return;
    this.id++;
    this.workers.push(new Worker(this.id, data.name, data.bday, true));
    this.logServ.write("Worker " + data.name + " was added.")
  }

  delWorker(worker: Worker): void {
    this.workers.splice(this.workers.findIndex((el) => el == worker), 1);
    this.logServ.write("Worker " + worker.name + " was deleted.")
  }
  
}
