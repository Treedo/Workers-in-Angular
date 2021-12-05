import { Component } from '@angular/core';

class Worker {

  id: number;
  name: string;
  date: Date;
  active: boolean;

  constructor(id: number, name: string, date: Date, active: boolean) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.active = active;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  id: number = 6;
  name: string = "Новый работник";
  title = 'workers';

  workers: Worker[] =
    [
      { name: "Aня", id: 1, date: new Date(1995, 5, 3), active: false },
      { name: "Марина", id: 2, date: new Date(1988, 15, 12), active: true },
      { name: "Альона", id: 4, date: new Date(1995, 1, 13), active: false },
      { name: "Вика", id: 5, date: new Date(2000, 7, 22), active: false },
    ];

    amountOfWorkers: number = this.workers.length ;
    
  addWorker(name: string, id: number): void {
    if (name == null || name.trim() == "" || id == null)
      return;
    this.id++;
    this.workers.push(new Worker(id, name, new Date(), true));
    this.amountOfWorkers = this.workers.length ;
  }

  delWorker(worker: Worker): void {
    this.workers = this.workers.filter(obj => obj !== worker);
    this.amountOfWorkers = this.workers.length ;
  }

}
