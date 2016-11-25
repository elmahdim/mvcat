import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar';

@Component({
    selector: 'dashboard',
    template: `
    <div class="container-fluid">
        <div class="row">
            <sidebar></sidebar>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 class="page-header">Categories</h1>
                <div class="row">
                <div class="col-sm-4">
                    <h4 class="text-capitalize">Add new category</h4>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Category name">
                        <small>Slug: </small>
                    </div>
                    <div class="form-group">
                        <div class="row">
                        <div class="col-sm-5">
                        <label class="form-label">Parent</label>
                        <select class="form-control">
                            <option value="0">None</option>
                            <option value="45">Cat 1</option>
                        </select>
                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <textarea rows="5" class="form-control"></textarea>
                    </div>
                    <button class="btn btn-primary text-capitalize" type="button">Add new category</button>
                </div>
                <div class="col-sm-8">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>
                            <input type="checkbox" />
                            </th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Slug</th>
                            <th>Count</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <input type="checkbox"/>
                            </td>
                            <td>Cat 1</td>
                            <td></td>
                            <td>cat-1</td>
                            <td class="text-center">1</td>
                            <td>Edit, Delete</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Uncategorized</td>
                            <td></td>
                            <td>uncategorized</td>
                            <td class="text-center">1</td>
                            <td>Edit, Delete</td>
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

export class CategoriesComponent {}