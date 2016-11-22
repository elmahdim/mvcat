import {Component} from 'angular2/core';
import {NavbarComponent} from './shared/navbar'
import {DashboardComponent} from './dashboard/dashboard.component'

@Component({
    selector: 'my-app',
    template: '<navbar></navbar><h1>MVCat AngularJS</h1><dashboard></dashboard>',
    directives: [NavbarComponent, DashboardComponent]
})
export class AppComponent { }