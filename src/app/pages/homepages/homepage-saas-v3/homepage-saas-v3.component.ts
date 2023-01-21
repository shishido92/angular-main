import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-homepage-saas-v3',
  templateUrl: './homepage-saas-v3.component.html',
  styleUrls: ['./homepage-saas-v3.component.scss']
})
export class HomepageSaasV3Component {

  ngOnInit() {
    Aos.init();
  }

}
