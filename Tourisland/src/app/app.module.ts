import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './Components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './admin/post-item/post-item.component';
import { PostListComponent } from './admin/post-list/post-list.component';

@NgModule({
  declarations: [AppComponent, MenuComponent,PostItemComponent,PostListComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
