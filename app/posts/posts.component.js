"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var PostsComponent = (function () {
    function PostsComponent(posts) {
        this.posts = posts;
    }
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <sidebar></sidebar>\n            <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n                <h1 class=\"page-header\">Posts <a class=\"btn btn-default btn-sm\" routerLink=\"/posts/new\">Add new</a></h1>\n                <div class=\"row form-group\">\n                    <div class=\"col-sm-6\">\n                        <ul class=\"list-inline text-muted small\">\n                            <li><span class=\"text-primary\">All</span> (12)</li>\n                            <li><span class=\"text-primary\">Published</span>  (10)</li>\n                            <li><span class=\"text-primary\">Trash</span> (2)</li>\n                        </ul>\n                    </div>\n                    <div class=\"col-sm-4 pull-right\">\n                        <div class=\"input-group\"> \n                            <input class=\"form-control input-sm\" placeholder=\"Search posts...\"> \n                            <span class=\"input-group-btn\"> \n                                <button class=\"btn btn-default btn-sm\" type=\"button\">Search</button> \n                            </span> \n                        </div>\n                    </div>\n                </div>\n                <div class=\"well well-sm\">\n                 <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-group\"> \n                           <select class=\"form-control input-sm\">\n                                    <option value=\"0\">Select action</option>\n                                    <option value=\"destroy\">Delete</option>\n                                    <option value=\"unpublish\">Un-publish</option>\n                                </select>\n                            <span class=\"input-group-btn\"> \n                                <button class=\"btn btn-default btn-sm\" type=\"button\">Apply</button> \n                            </span> \n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-group\"> \n                           <select class=\"form-control input-sm\">\n                                    <option value=\"0\">All categories</option>\n                                    <option value=\"cat1\">cat1</option>\n                                    <option value=\"cat2\">cat2</option>\n                                </select>\n                            <span class=\"input-group-btn\"> \n                                <button class=\"btn btn-default btn-sm\" type=\"button\">Filter</button> \n                            </span> \n                        </div>\n                    </div>\n                    <div class=\"col-sm-3 pull-right text-right\">\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                          <button type=\"button\" class=\"btn btn-default btn-sm\">\n                              <span class=\"glyphicon glyphicon-list\" aria-hidden=\"true\"></span>\n                          </button>\n                          <button type=\"button\" class=\"btn btn-default btn-sm\">\n                              <span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span>\n                          </button>\n                        </div>\n                    </div>\n                </div>  \n                </div>\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>\n                            <input type=\"checkbox\" />\n                            </th>\n                            <th>Title</th>\n                            <th>Categories</th>\n                            <th>Tags</th>\n                            <th>Date</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let post of posts.data\">\n                            <td>\n                            <input type=\"checkbox\" />\n                            </td>\n                            <td>{{post.title}}</td>\n                            <td>{{post.category}}</td>\n                            <td>\n                                <ul class=\"list-inline\">\n                                    <li *ngFor=\"let tag of post.tags\"><span class=\"label label-default\">{{tag}}</span></li>\n                                </ul>\n                            </td>\n                            <td>{{post.created_at}}</td>\n                            <td>\n                                <a href=\"\">Edit</a>\n                                <a href=\"\">Trash</a>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                            <input type=\"checkbox\" />\n                            </td>\n                            <td>Title</td>\n                            <td>Uncategorized</td>\n                            <td>1tags, tag2, tag3</td>\n                            <td>2016/11/23</td>\n                            <td>\n                                <a href=\"\">Edit</a>\n                                <a href=\"\">Trash</a>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    "
        }),
        __param(0, core_1.Inject('posts')), 
        __metadata('design:paramtypes', [Object])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map