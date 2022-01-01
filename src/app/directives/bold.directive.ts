import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBold]',
  host: {
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class BoldDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
  }

  @Input()
  itIsTitle: boolean = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.itIsTitle) {
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    }
  }

  onMouseLeave() {
    if (this.itIsTitle) {
      this.renderer.removeStyle(this.elRef.nativeElement, 'color');
    }
  }

  @HostBinding("style.border")
  get getFontWeight(){
    return "1px solid";
  }

  @HostBinding("style.cursor")
  get getCursor(){
    return "pointer";
  }

}
