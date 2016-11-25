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
var CategoriesComponent = (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <sidebar></sidebar>\n            <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n                <h1 class=\"page-header\">Categories</h1>\n                <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <h4 class=\"text-capitalize\">Add new category</h4>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Category name\">\n                        <small>Slug: </small>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"row\">\n                        <div class=\"col-sm-5\">\n                        <label class=\"form-label\">Parent</label>\n                        <select class=\"form-control\">\n                            <option value=\"0\">None</option>\n                            <option value=\"45\">Cat 1</option>\n                        </select>\n                        </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Description</label>\n                        <textarea rows=\"5\" class=\"form-control\"></textarea>\n                    </div>\n                    <button class=\"btn btn-primary text-capitalize\" type=\"button\">Add new category</button>\n                </div>\n                <div class=\"col-sm-8\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>\n                            <input type=\"checkbox\" />\n                            </th>\n                            <th>Name</th>\n                            <th>Description</th>\n                            <th>Slug</th>\n                            <th>Count</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                            <input type=\"checkbox\"/>\n                            </td>\n                            <td>Cat 1</td>\n                            <td></td>\n                            <td>cat-1</td>\n                            <td class=\"text-center\">1</td>\n                            <td>Edit, Delete</td>\n                        </tr>\n                        <tr>\n                            <td></td>\n                            <td>Uncategorized</td>\n                            <td></td>\n                            <td>uncategorized</td>\n                            <td class=\"text-center\">1</td>\n                            <td>Edit, Delete</td>\n                        </tr>\n                    </tbody>\n                </table>\n                </div>\n                </div>               \n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map