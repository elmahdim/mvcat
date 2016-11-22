import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="">{{title}}</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="">Blog</a>
                </li>
            </ul>
        </div>
    </nav>
    `
})
export class NavbarComponent {
    title = 'MVCat';
}