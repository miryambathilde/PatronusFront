import { Component, OnInit } from '@angular/core';
import { AthletesService } from 'src/app/services/athletes.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  files: any;

  constructor(private athletesService: AthletesService) { }

  ngOnInit(): void {
  }

  recogerImagen($event: any) {
    this.files = $event.target.files
    console.log(this.files);
  }

  async onSubmit(pForm: any) {
    let formulario = new FormData();
    formulario.append('photo', this.files[0]);
    formulario.append('summary', pForm.value.summary);
    formulario.append('username', pForm.value.username);
    const result = await this.athletesService.createNew(formulario);
    console.log(result);
  }

}
