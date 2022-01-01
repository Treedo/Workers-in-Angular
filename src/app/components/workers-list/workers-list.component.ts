import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Worker } from 'src/app/models/workers/worker'; 


@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {

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
