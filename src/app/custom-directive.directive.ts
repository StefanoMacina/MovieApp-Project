import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirective {

  // input del risultato di appCustomDirective (check -> FilmList.html)
  @Input() appCustomDirective: boolean | undefined;
  
  color = 'brown';

  constructor(private el: ElementRef<HTMLHeadingElement>) {
  }
  
  ngOnInit(){
    // controlla se applicare la direttiva in base al valore restituito da appCustomDirective (check -> FilmList.html)
    this.appCustomDirective ? this.changeColor() : this.el.nativeElement.style.color = 'inherit'
  }

    changeColor(){
    this.el.nativeElement.style.color= this.color
  }

}
