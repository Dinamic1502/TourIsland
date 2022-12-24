import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistaquiPageRoutingModule } from './registaqui-routing.module';

import { RegistaquiPage } from './registaqui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistaquiPageRoutingModule
  ],
  declarations: [RegistaquiPage]
})
export class RegistaquiPageModule {}
