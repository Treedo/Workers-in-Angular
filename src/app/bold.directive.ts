import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.fontWeight = "bold" ;
   }

}
