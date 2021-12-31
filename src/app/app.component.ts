import { Component, Input } from '@angular/core';
import { Worker } from './models/workers/worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  id: number = 6;
  nameOfNewWorkers: string = "New worker...";

  title = 'workers';

  workers: Worker[] =
    [
      { name: "Aня", id: 1, date: new Date(1995, 5, 3), active: false },
      { name: "Марина", id: 2, date: new Date(1988, 15, 12), active: true },
      { name: "Альона", id: 4, date: new Date(1995, 1, 13), active: false },
      { name: "Вика", id: 5, date: new Date(2000, 7, 22), active: false },
    ];

    amountOfWorkers: number = this.workers.length ;
    
  addWorker(data: any): void {
    if (data.name == null || data.name.trim() == "" || this.id == null)
      return;
    this.id++;
    this.workers.push(new Worker(this.id, data.name, data.bday, true));
    this.amountOfWorkers = this.workers.length ;
  }

  delWorker(worker: Worker): void {
    this.workers = this.workers.filter(obj => obj !== worker);
    this.amountOfWorkers = this.workers.length ;
  }

  //nameOfNewWorkersCange(name: string): void {
  //  this.nameOfNewWorkers = name ;
  //}

}
