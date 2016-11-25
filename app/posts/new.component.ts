import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar';

@Component({
    selector: 'dashboard',
    template: `
    <div class="container-fluid">
        <div class="row">
            <sidebar></sidebar>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 class="page-header text-capitalize">Add new post</h1>
                <div class="row">
                    <div class="col-sm-9">
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Post title">
                     </div>
                     <div class="form-group">
                         <textarea rows="10" class="form-control"></textarea>
                     </div>
                     <div class="panel panel-default">
                        <div class="panel-heading"><strong>Tags</strong></div>
                        <div class="panel-body">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Post tags">
                        </div>
                        <small>Separate tags with commas</small>    
                        </div>
                        
                    </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="panel panel-default">
                            <div class="panel-heading"><strong>Publish</strong></div>
                            <div class="panel-body">
                            <div class="row">
                            <div class="col-xs-6"><button class="btn btn-default btn-block" type="button">Save</button></div>
                            <div class="col-xs-6"><button class="btn btn-primary btn-block" type="button">Publish</button></div>
                            </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading"><strong>Categories</strong></div>
                            <div class="panel-body">
                                
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" value="0">
                                    Uncategorized
                                  </label>
                                </div>
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" value="45">
                                    Cat1
                                  </label>
                                </div>
                                </div>
                                <div class="panel-footer">
                                    <button class="btn btn-link" type="button">+ Add new category</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

export class NewPostComponent { }