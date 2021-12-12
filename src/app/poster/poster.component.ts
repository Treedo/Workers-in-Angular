import { Component, EventEmitter, OnChanges, DoCheck, Input, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnChanges, DoCheck {

  @Input() name: string = "";
  bday: Date = new Date() ;

  @Output() addWor = new EventEmitter();
  @Output() nameChange = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if(propName == "name" && !changes[propName].firstChange) {
        console.log(changes[propName].currentValue);
      }
      
    }
  }

  ngDoCheck(): void {
    console.log("Something changed in 'Poster' component...");
  }

  addWorker(name: string, bday: Date): void {
    this.addWor.emit({name: name, bday: bday}); 
  }

  onNameChange(val:string) {
    this.name = val;
    this.nameChange.emit(val);
  }

}
