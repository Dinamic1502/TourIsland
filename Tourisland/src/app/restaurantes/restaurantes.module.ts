import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantesPageRoutingModule } from './restaurantes-routing.module';

import { RestaurantesPage } from './restaurantes.page';
import { MenuComponent } from '../Components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantesPageRoutingModule
  ],
  declarations: [RestaurantesPage, MenuComponent]
})
export class RestaurantesPageModule {}
