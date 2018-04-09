import {Component} from '@angular/core';

@Component({
    selector: 'demo-root',
    template: `
      <demo-navbar></demo-navbar>
      <router-outlet></router-outlet>
    `
})
export class AppComponent {
    constructor() {
    }
}
