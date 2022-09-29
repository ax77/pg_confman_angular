import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('click') onClick() {
    this.highlight('gray');
  }

}
