import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') color : string = 'black';

  @HostListener('window:keydown', ['$event']) windowClick($event) {
    
    // Exercice 1
    if(37 === $event.keyCode){
      this.color = 'blue';
    }else if(38 === $event.keyCode){
      this.color = 'orange';
    }else if(39 === $event.keyCode){
      this.color = 'green';
    }else if(40 === $event.keyCode){
      this.color = 'red';
    }
    

    /* Couleur pseudo aléatoire
    if([37,38,39,40].includes($event.keyCode)){
        this.color = 
          'rgb('+this.getRandomArbitrary(0,255)+
          ','+this.getRandomArbitrary(0,255)+
          ','+this.getRandomArbitrary(0,255)+')';
    }
    */
  }
  constructor() { }

  private getRandomArbitrary(min : number, max : number) : number {
    return (Math.random() * (max - min) + min);
  }
}
