import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-white',
  templateUrl: './navbar-white.component.html',
  styleUrls: ['./navbar-white.component.scss']
})
export class NavbarWhiteComponent {

  scrollPosition: number = 0;
  scrolled: boolean = false;


  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.scrollPosition = window.pageYOffset;
      this.scrolled = this.scrollPosition > 0;
    });
  }
  

}
