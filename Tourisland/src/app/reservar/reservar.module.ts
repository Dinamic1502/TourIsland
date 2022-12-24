import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservarPageRoutingModule } from './reservar-routing.module';

import { ReservarPage } from './reservar.page';
import { MenuComponent } from '../Components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservarPageRoutingModule
  ],
  declarations: [ReservarPage, MenuComponent]
})
export class ReservarPageModule {}
