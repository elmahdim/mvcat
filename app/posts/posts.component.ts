import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar';

@Component({
    selector: 'dashboard',
    template: `
    <div class="container-fluid">
        <div class="row">
            <sidebar></sidebar>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 class="page-header">Posts <a class="btn btn-default btn-sm" routerLink="/posts/new">Add new</a></h1>
                <div class="row form-group">
                    <div class="col-sm-6">
                        <ul class="list-inline small">
                            <li>All (12)</li>
                            <li>Published (10)</li>
                            <li>Trash (2)</li>
                        </ul>
                    </div>
                    <div class="col-sm-4 pull-right">
                        <div class="input-group"> 
                            <input class="form-control input-sm" placeholder="Search posts..."> 
                            <span class="input-group-btn"> 
                                <button class="btn btn-default btn-sm" type="button">Search</button> 
                            </span> 
                        </div>
                    </div>
                </div>
                <div class="well well-sm">
                 <div class="row">
                    <div class="col-sm-3">
                        <div class="input-group"> 
                           <select class="form-control input-sm">
                                    <option value="0">Select action</option>
                                    <option value="destroy">Delete</option>
                                    <option value="unpublish">Un-publish</option>
                                </select>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default btn-sm" type="button">Apply</button> 
                            </span> 
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="input-group"> 
                           <select class="form-control input-sm">
                                    <option value="0">All categories</option>
                                    <option value="cat1">cat1</option>
                                    <option value="cat2">cat2</option>
                                </select>
                            <span class="input-group-btn"> 
                                <button class="btn btn-default btn-sm" type="button">Filter</button> 
                            </span> 
                        </div>
                    </div>
                    <div class="col-sm-3 pull-right text-right">
                        <div class="btn-group" role="group" aria-label="...">
                          <button type="button" class="btn btn-default btn-sm">
                              <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                              <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                          </button>
                        </div>
                    </div>
                </div>  
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>
                            <input type="checkbox" />
                            </th>
                            <th>Title</th>
                            <th>Categories</th>
                            <th>Tags</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <input type="checkbox" />
                            </td>
                            <td>Title</td>
                            <td>Uncategorized</td>
                            <td>No tags</td>
                            <td>2016/11/23</td>
                            <td>
                                <a href="">Edit</a>
                                <a href="">Trash</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <input type="checkbox" />
                            </td>
                            <td>Title</td>
                            <td>Uncategorized</td>
                            <td>1tags, tag2, tag3</td>
                            <td>2016/11/23</td>
                            <td>
                                <a href="">Edit</a>
                                <a href="">Trash</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `
})

export class PostsComponent {}