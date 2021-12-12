import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  amountOfWorkersText: String = "[0]" ;
  nameOfNewWorkers: String = "..." ;

  @Input()
  set amountOfWorkers(val:number) {
    this.amountOfWorkersText = "[" + val + "]" ;
  }

  @Input()
  set name(val:string) {
    if (val.trim() == "") {
      this.nameOfNewWorkers = "...";
    } else {
      this.nameOfNewWorkers = " " + val.trim() + "!";
    }
  }

}
