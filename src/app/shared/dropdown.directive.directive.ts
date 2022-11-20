import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isOpen:boolean=false;

  @HostListener('click') toggler(){
    this.isOpen = !this.isOpen;
  }
  
  constructor() { }

}