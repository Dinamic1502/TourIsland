import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaquilleroPageRoutingModule } from './taquillero-routing.module';

import { TaquilleroPage } from './taquillero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaquilleroPageRoutingModule
  ],
  declarations: [TaquilleroPage]
})
export class TaquilleroPageModule {}
