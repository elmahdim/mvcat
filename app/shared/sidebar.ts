import { Component } from '@angular/core';

@Component({
    selector: 'sidebar',
    template: `
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
            <li *ngFor="let item of SidebarMenu">
                <a routerLink="{{item.route}}">{{item.title}}</a>
            </li>
        </ul>
    </div>
    `
})
export class SidebarComponent {
    SidebarMenu = [
        {
            'route':'/posts',
            'title':'All Posts'
        },
        {
            'route':'/posts/new',
            'title':'Add post'
        },
        {
            'route':'/categories',
            'title':'Categories'
        },
        {
            'route':'/tags',
            'title':'Tags'
        }
    ];
}