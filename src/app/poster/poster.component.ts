import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent {

  _name: string = "";
  bday: Date = new Date() ;

  @Output() addWor = new EventEmitter();
  @Output() newWorkerName = new EventEmitter();

  addWorker(name: string, bday: Date): void {
    this.addWor.emit({name: name, bday: bday}); 
  }

  set name(val:string) {
    this._name = val;
    this.newWorkerName.emit(val);
  }

}
