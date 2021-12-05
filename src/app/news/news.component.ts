import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  amountOfWorkersText: String = "[0]" ;

  @Input()
  set amountOfWorkers(val:number) {
    this.amountOfWorkersText = "[" + val + "]" ;
  }

}
