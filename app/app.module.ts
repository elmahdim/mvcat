import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './shared/navbar';
import {SidebarComponent} from './shared/sidebar';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavbarComponent, DashboardComponent, SidebarComponent ],
  bootstrap:    [ AppComponent, NavbarComponent, SidebarComponent ]
})
export class AppModule { }
