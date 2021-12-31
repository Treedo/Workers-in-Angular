import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  showNews: boolean = true ;

  activeRed: boolean = false ;
  amountOfWorkersText: String = "[0]" ;
  nameOfNewWorkers: String = "..." ;

  showHideNews(){
    this.showNews = !this.showNews ;
  }

  cangeFont(){
    this.activeRed = ! this.activeRed ;
  }

  @Input()
  set amountOfWorkers(val:number) {
    this.amountOfWorkersText = "[" + val + "]" ;
  }

  @Input()
  set name(val:string) {
    if (val.trim() == "") {
      this.nameOfNewWorkers = "...";
    } else {
      this.nameOfNewWorkers = " " + val.trim() + "!" ;
    }
  }

}
