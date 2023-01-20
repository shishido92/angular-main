import { Component } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-hero-sass-v3',
  templateUrl: './hero-sass-v3.component.html',
  styleUrls: ['./hero-sass-v3.component.scss']
})
export class HeroSassV3Component {

  ngOnInit() {
    this.parallax();
  }
  
  parallax() {
    let element = document.querySelectorAll('.parallax');
    for (let i = 0; i < element.length; i++) {
      let parallaxInstance = new Parallax(element[i] as HTMLElement);
    }
  }


}
