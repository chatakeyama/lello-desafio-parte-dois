import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  constructor(private render: Renderer2, private element: ElementRef) { }

  @HostListener('mouseover')
  enable() {
    this.render.setStyle(this.element.nativeElement, 'filter', 'brightness(75%)');
  }

  @HostListener('mouseout')
  disable() {
    this.render.setStyle(this.element.nativeElement, 'filter', 'brightness(100%)');
  }

}
