import { Component, OnInit } from '@angular/core';
import { StuffService } from '../../services/stuff.service'
import { NgForm } from '@angular/forms';
import { Stuff } from 'src/app/models/stuff';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  constructor(public stuffService: StuffService) { }

  //Variable update para decidir si se actualiza o se adiciona
  update: number = 0;
  ngOnInit(): void {
    this.getStuffs();
  }

  //Método para obtener todos los registros y luego mostrarlos en pantalla
  getStuffs() {
    this.stuffService.getStuffs().subscribe(
      res => {
        this.stuffService.stuffs = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  //Método para obtener un registro por nombre
  getStuff(name: string) {
    this.stuffService.getStuff(name).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

  //Método para insertar registros en la base de datos y si es el caso
  //actualizar el registro
  addStuff(form: NgForm) {
    if (this.update == 1) {
      this.stuffService.putStuffs(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getStuffs();
        this.update = 0;
      });
    }
    else {
      this.stuffService.postStuffs(form.value).subscribe((res) => {
        this.getStuffs();
        this.resetForm(form);
      },
        err => console.log(err));
    }
  }

  //Método para actualizar, el cual solo coloca los datos obtenidos en el
  //formulario para a apartir de ahí actualizar
  editStuffs(stuff: Stuff) {
    this.stuffService.stuffSelected = stuff;
    if (stuff._id != "") {
      this.update = 1;
    }
  }

  //Método para borrar registros de la base de datos
  deleteStuffs(id: string) {
    if (confirm("Estas seguro de eliminarlo?")) {
      this.stuffService.deleteStuffs(id).subscribe((res) => {
        this.getStuffs();
      });
    }
  }

  //Método para limpiar el formulario y quedar listo para un nuevo registro o 
  //actualizar otro
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.stuffService.stuffSelected = new Stuff();
    }
  }

  //Método para mostrar la información de los movimientos de un registro
  mostrarInformacion(id: string) {
    this.stuffService.mostrarInformacion(id).subscribe(
      res => {
        //this.stuffService.stuffs = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
