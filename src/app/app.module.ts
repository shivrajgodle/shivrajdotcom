import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {RippleModule} from 'primeng/ripple';
import {MenuModule} from 'primeng/menu';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KnowmoreComponent,
    AboutmeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    TabViewModule,
    RippleModule,
    MenuModule,
    ToolbarModule,
    SidebarModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
