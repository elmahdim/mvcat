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
var NewPostComponent = (function () {
    function NewPostComponent() {
    }
    NewPostComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <sidebar></sidebar>\n            <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n                <h1 class=\"page-header text-capitalize\">Add new post</h1>\n                <div class=\"row\">\n                    <div class=\"col-sm-9\">\n                     <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Post title\">\n                     </div>\n                     <div class=\"form-group\">\n                         <textarea rows=\"10\" class=\"form-control\"></textarea>\n                     </div>\n                     <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\"><strong>Tags</strong></div>\n                        <div class=\"panel-body\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Post tags\">\n                        </div>\n                        <small>Separate tags with commas</small>    \n                        </div>\n                        \n                    </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\"><strong>Publish</strong></div>\n                            <div class=\"panel-body\">\n                            <div class=\"row\">\n                            <div class=\"col-xs-6\"><button class=\"btn btn-default btn-block\" type=\"button\">Save</button></div>\n                            <div class=\"col-xs-6\"><button class=\"btn btn-primary btn-block\" type=\"button\">Publish</button></div>\n                            </div>\n                            </div>\n                        </div>\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\"><strong>Categories</strong></div>\n                            <div class=\"panel-body\">\n                                \n                                <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"0\">\n                                    Uncategorized\n                                  </label>\n                                </div>\n                                <div class=\"checkbox\">\n                                  <label>\n                                    <input type=\"checkbox\" value=\"45\">\n                                    Cat1\n                                  </label>\n                                </div>\n                                </div>\n                                <div class=\"panel-footer\">\n                                    <button class=\"btn btn-link\" type=\"button\">+ Add new category</button>\n                                </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NewPostComponent);
    return NewPostComponent;
}());
exports.NewPostComponent = NewPostComponent;
//# sourceMappingURL=new.component.js.map