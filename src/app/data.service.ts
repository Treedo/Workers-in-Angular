import { Injectable } from '@angular/core';
import { Worker } from './models/workers/worker';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private logServ: LogService) { }

  id: number = 6;

  workers: Worker[] = [
    { name: "Aня", id: 1, date: new Date(1995, 5, 3), active: false },
    { name: "Марина", id: 2, date: new Date(1988, 15, 12), active: true },
    { name: "Альона", id: 4, date: new Date(1995, 1, 13), active: false },
    { name: "Вика", id: 5, date: new Date(2000, 7, 22), active: false },
  ];

  getWorkers(): Worker[] {
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
