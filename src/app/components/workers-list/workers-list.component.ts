import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Worker } from 'src/app/models/workers/worker';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {

  nameOfNewWorkers: string = "New worker...";
  title = 'workers';
  limit: String = "6";
  workers: Worker[] = [];

  private querySubscription: Subscription;
  constructor(private dataServ: DataService, private activateRoute: ActivatedRoute,
  ) {

    this.querySubscription = activateRoute.queryParams.subscribe(
      (queryParam: any) => {
        if (queryParam['limit'] != undefined) {
          this.limit =  queryParam['limit'];
        }
        
      }
    );
  }



  addWorker(data: any): void {
    if (data.name == null || data.name.trim() == "")
      return;
    this.dataServ.addWorker(data);
  }

  delWorker(worker: Worker): void {
    this.dataServ.delWorker(worker);
  }

  ngOnInit() {
    this.workers = this.dataServ.getWorkers(this.limit);
  }

}
