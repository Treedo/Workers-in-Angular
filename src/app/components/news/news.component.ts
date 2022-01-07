import { Component, Input} from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Worker } from 'src/app/models/workers/worker';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor(private dataServ: DataService) { }

  workers: Worker[] = [];

  ngOnInit() {
    this.workers = this.dataServ.workers;
  }

  showNews: boolean = true ;

  activeRed: boolean = false ;

  showHideNews(){
    this.showNews = !this.showNews ;
  }

  cangeFont(){
    this.activeRed = ! this.activeRed ;
  }

}
