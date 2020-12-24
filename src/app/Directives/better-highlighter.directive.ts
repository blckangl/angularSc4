import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightedColor = 'green';
  @HostBinding('style.backgroundColor') highlightColor = this.defaultColor;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {


  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.highlightColor = this.highlightedColor;
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.highlightColor =this.defaultColor;
  }
}
