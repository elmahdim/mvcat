import { Component } from '@angular/core';

@Component({
    selector: 'sidebar',
    template: `
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
            <li *ngFor="let link of links">
                <a href="">{{link}}</a>
            </li>
        </ul>
    </div>
    `
})
export class SidebarComponent {
    links = ['Dashboard', 'All Posts', 'Add post', 'Categories', 'Tags']; 
}