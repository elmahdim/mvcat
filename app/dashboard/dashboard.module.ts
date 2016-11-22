import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {SidebarComponent} from '../shared/sidebar';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ SidebarComponent ],
  bootstrap:    [ SidebarComponent ]
})
export class DhasboardModule { }
