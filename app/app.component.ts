import {Component} from 'angular2/core';
import {NavbarComponent} from './shared/navbar'

@Component({
    selector: 'my-app',
    template: '<navbar></navbar><h1>MVCat AngularJS</h1>',
    directives: [NavbarComponent]
})
export class AppComponent { }