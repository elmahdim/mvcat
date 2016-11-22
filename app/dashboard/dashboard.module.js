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
var platform_browser_1 = require('@angular/platform-browser');
var sidebar_1 = require('../shared/sidebar');
var DhasboardModule = (function () {
    function DhasboardModule() {
    }
    DhasboardModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [sidebar_1.SidebarComponent],
            bootstrap: [sidebar_1.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DhasboardModule);
    return DhasboardModule;
}());
exports.DhasboardModule = DhasboardModule;
//# sourceMappingURL=dashboard.module.js.map