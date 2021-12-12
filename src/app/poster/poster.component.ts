import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent {

  @Input() name: string = "";
  bday: Date = new Date() ;

  @Output() addWor = new EventEmitter();
  @Output() nameChange = new EventEmitter();

  addWorker(name: string, bday: Date): void {
    this.addWor.emit({name: name, bday: bday}); 
  }

  onNameChange(val:string) {
    this.name = val;
    this.nameChange.emit(val);
  }

}
