import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular';

import { RegistrarsePageRoutingModule } from './registrarse-routing.module';

import { RegistrarsePage } from './registrarse.page';
import { ClientService } from '../services/client.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarsePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarsePage],
  providers:[ClientService]
})
export class RegistrarsePageModule {}
