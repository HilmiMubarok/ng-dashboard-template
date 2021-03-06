import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule, TreeViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
