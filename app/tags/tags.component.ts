import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar';

@Component({
    selector: 'dashboard',
    template: `
    <div class="container-fluid">
        <div class="row">
            <sidebar></sidebar>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 class="page-header">Tags</h1>
                <div class="row">
                <div class="col-sm-4">
                    <h4 class="text-capitalize">Add new category</h4>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Tag name">
                        <small>Slug: tag-name</small>
                    </div>
                    <button class="btn btn-primary text-capitalize" type="button">Add new tag</button>
                </div>
                <div class="col-sm-8">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th class="text-center">Count</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Cat 1</td>
                            <td>cat-1</td>
                            <td class="text-center">1</td>
                            <td class="text-right">Edit, Delete</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Gerg</td>
                            <td>gerg</td>
                            <td class="text-center">1</td>
                            <td class="text-right">Edit, Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>               
            </div>
        </div>
    </div>
    `
})

export class TagsComponent {}