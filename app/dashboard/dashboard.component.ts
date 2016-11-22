import {Component} from 'angular2/core';
import {SidebarComponent} from '../shared/sidebar'

@Component({
    selector: 'dashboard',
    template: `
    <div class="container-fluid">
        <div class="row">
            <sidebar></sidebar>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 class="page-header">Dashboard</h1>
            </div>
        </div>
    </div>
    `,
    directives: [SidebarComponent]
})

export class DashboardComponent {}