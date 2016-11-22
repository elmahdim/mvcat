import {Component} from 'angular2/core';
import {NavbarComponent} from './shared/navbar'
import {DashboardComponent} from './dashboard/dashboard.component'

@Component({
    selector: 'my-app',
    template: '<navbar></navbar><dashboard></dashboard>',
    directives: [NavbarComponent, DashboardComponent]
})
export class AppComponent { }