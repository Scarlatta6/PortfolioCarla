import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  exp: Experiencia [] = [];

  constructor(private expServ: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void {
    this.expServ.lista().subscribe(data => {this.exp = data;})
  }

  delete(id?: number) {
    if (id != undefined) {
      this.expServ.delete(id).subscribe( data => {
        this.cargarExperiencia();
      }, err => {
        alert("No se pudo borrar la experiencia");
      })
    }
  }
}
