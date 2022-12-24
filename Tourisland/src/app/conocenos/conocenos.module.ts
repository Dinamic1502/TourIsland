import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConocenosPageRoutingModule } from './conocenos-routing.module';

import { ConocenosPage } from './conocenos.page';
import { MenuComponent } from '../Components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConocenosPageRoutingModule
  ],
  declarations: [ConocenosPage, MenuComponent]
})
export class ConocenosPageModule {}
