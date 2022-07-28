import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pers: Persona = new Persona("", "", "");

  constructor(public datosPersona: PersonaService) { }

  ngOnInit(): void {
    this.datosPersona.getPersona().subscribe(data => {this.pers = data})
  }

}
