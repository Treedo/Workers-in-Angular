import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataService } from './data.service';
import { Worker } from './models/workers/worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent {

  constructor(private dataServ: DataService) { }

  nameOfNewWorkers: string = "New worker...";
  title = 'workers';
  workers: Worker[] = [];

  addWorker(data: any): void {
    if (data.name == null || data.name.trim() == "")
      return;
    this.dataServ.addWorker(data);
  }

  delWorker(worker: Worker): void {
    this.dataServ.delWorker(worker);
  }

  ngOnInit() {
    this.workers = this.dataServ.getWorkers();
  }

}
