import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  counter = 0;
  defailtInput = 'This is a text';
  @HostBinding('innerHtml') text = this.defailtInput;

  @HostListener('click') onClick(event: Event): void {
    this.text = this.defailtInput + ' ' + (++this.counter);
  }

  constructor() {
  }

}
