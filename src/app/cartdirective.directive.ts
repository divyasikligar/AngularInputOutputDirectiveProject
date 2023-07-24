import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCartdirective]'
})
export class CartdirectiveDirective {

  constructor(private e:ElementRef) { 

  e.nativeElement.style.color= "white"
}

@HostBinding('style.color') colorkey = "white"
@HostBinding('style.background') back = "rgb(190, 148, 190)"


@HostListener('mouseenter') onmouseenter()
{
  this.colorkey = "yellow" 
}

@HostListener('mouseleave') onmouseleave()
{
  this.colorkey = "white"
}

}
