import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goto(){

    this.router.navigate(['/taquillero']);
  }

}
