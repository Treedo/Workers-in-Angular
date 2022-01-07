import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/workers/worker';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {

  constructor( 
    private activateRoute: ActivatedRoute,
    private http: HttpClient
    ) { }

  worker: Worker = new Worker() ;

  ngOnInit() {

    const headers = { 'x-access-token': environment.api_token };
    this.http.get<any>(environment.api_url + "/worker/list?company=18", { headers }).subscribe(data => {
      
      data.forEach((el: any) => {
        if(el.id == this.activateRoute.snapshot.params['id']) {
          this.worker = new Worker(el.id, el.name, new Date(), true)
      } 
      });
      
    });

  }
}
