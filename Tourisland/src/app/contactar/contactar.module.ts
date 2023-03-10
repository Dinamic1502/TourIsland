import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactarPageRoutingModule } from './contactar-routing.module';

import { ContactarPage } from './contactar.page';
import { MenuComponent } from '../Components/menu/menu.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactarPageRoutingModule
  ],
  declarations: [ContactarPage, MenuComponent]
})
export class ContactarPageModule {}
