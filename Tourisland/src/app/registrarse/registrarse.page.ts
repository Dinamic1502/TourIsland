import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  constructor(private clientService: ClientService) {}
  // name = new FormControl('fabian');
  clientForm = new FormGroup({
    nombres: new FormControl(''),
    email: new FormControl(''),
    apellidos: new FormControl(''),
    identificacion: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    contrasena: new FormControl(''),
    contraselaconfir: new FormControl(''),
  });

  ngOnInit() {
    // const cl = new Client();
    // this.clientService.addHero(cl).subscribe(client=>console.log(client)
    // );
  }

  guardar() {
    console.log(this.clientForm.value);
    const cl = new Client();
    cl.set(this.clientForm.value);
    this.clientService
      .create(cl)
      .subscribe((response) => {
        this.clientForm.reset()
      });
  }
}
