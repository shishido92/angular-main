import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-list-view-v1',
  templateUrl: './list-view-v1.component.html',
  styleUrls: ['./list-view-v1.component.scss']
})
export class ListViewV1Component {

  ngOnInit() {
    Aos.init();
  }

}
