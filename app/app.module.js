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
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var navbar_1 = require('./shared/navbar');
var sidebar_1 = require('./shared/sidebar');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var posts_component_1 = require('./posts/posts.component');
var new_component_1 = require('./posts/new.component');
var categories_component_1 = require('./categories/categories.component');
var tags_component_1 = require('./tags/tags.component');
var posts_service_1 = require('./posts/posts.service');
var appRoutes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'posts/new', component: new_component_1.NewPostComponent },
    { path: 'categories', component: categories_component_1.CategoriesComponent },
    { path: 'tags', component: tags_component_1.TagsComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, navbar_1.NavbarComponent, dashboard_component_1.DashboardComponent, sidebar_1.SidebarComponent, posts_component_1.PostsComponent, new_component_1.NewPostComponent, categories_component_1.CategoriesComponent, tags_component_1.TagsComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: 'posts', useClass: posts_service_1.PostsService }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map