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
var core_1 = require('@angular/core');
var TagsComponent = (function () {
    function TagsComponent() {
    }
    TagsComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <sidebar></sidebar>\n            <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n                <h1 class=\"page-header\">Tags</h1>\n                <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <h4 class=\"text-capitalize\">Add new category</h4>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Tag name\">\n                        <small>Slug: tag-name</small>\n                    </div>\n                    <button class=\"btn btn-primary text-capitalize\" type=\"button\">Add new tag</button>\n                </div>\n                <div class=\"col-sm-8\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th><input type=\"checkbox\" /></th>\n                            <th>Name</th>\n                            <th>Slug</th>\n                            <th class=\"text-center\">Count</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><input type=\"checkbox\"/></td>\n                            <td>Cat 1</td>\n                            <td>cat-1</td>\n                            <td class=\"text-center\">1</td>\n                            <td class=\"text-right\">Edit, Delete</td>\n                        </tr>\n                        <tr>\n                            <td></td>\n                            <td>Gerg</td>\n                            <td>gerg</td>\n                            <td class=\"text-center\">1</td>\n                            <td class=\"text-right\">Edit, Delete</td>\n                        </tr>\n                    </tbody>\n                </table>\n                </div>\n                </div>               \n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TagsComponent);
    return TagsComponent;
}());
exports.TagsComponent = TagsComponent;
//# sourceMappingURL=tags.component.js.map