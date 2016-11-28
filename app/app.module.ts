import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './shared/navbar';
import { SidebarComponent } from './shared/sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './posts/new.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { PostsService } from './posts/posts.service';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/new', component: NewPostComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'tags', component: TagsComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, NavbarComponent, DashboardComponent, SidebarComponent, PostsComponent, NewPostComponent, CategoriesComponent, TagsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [{provide:'posts', useClass:PostsService}]
})
export class AppModule { }