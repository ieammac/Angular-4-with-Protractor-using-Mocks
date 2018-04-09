import {Component, OnInit} from '@angular/core';
import {AppSettings} from '../app.settings';

@Component({
    selector: 'demo-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    readonly AppSettings = AppSettings;

    constructor() {
    }

    ngOnInit() {
    }
}
