import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './shared/navbar';
import { SidebarComponent } from './shared/sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, NavbarComponent, DashboardComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// , NavbarComponent, SidebarComponent