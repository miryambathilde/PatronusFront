import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sponsor } from 'src/app/interfaces/sponsor.interface';
import { SponsorsService } from 'src/app/services/sponsors.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile-sponsor',
  templateUrl: './edit-profile-sponsor.component.html',
  styleUrls: ['./edit-profile-sponsor.component.css']
})
export class EditProfileSponsorComponent implements OnInit {
  sponsor: any = {};
  files: any;
  urlBack: string = 'http://localhost:3000/';
  emailSponsor: any = [];
  email: any = {};

  dropdownList = [] as any;
  selectedItems = [] as any;
  dropdownSettings: IDropdownSettings = {};

  constructor(
    private sponsorsService: SponsorsService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.sponsor = await this.sponsorsService.getSponsor();
    this.emailSponsor = await this.sponsorsService.getEmailSponsor();
    this.email = this.emailSponsor[0];
    console.log(this.email);

    this.selectedItems = await this.sponsorsService.getFavoritesSponsor();

    setTimeout(async () => {
      this.dropdownList = await this.sponsorsService.getSportsSponsors();
      console.log(this.dropdownList);
    }, 10);

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Seleccionar todos',
      unSelectAllText: 'Deseleccionar todos',
      itemsShowLimit: 5
    };
  }

  onItemSelect(item: any) {
    const itemId = item.item_id;
    console.log(itemId);
    const result = this.sponsorsService.addFavoriteSport(itemId);
    console.log(result);
  }
  onSelectAll(items: any) {
    // const result = this.sponsorsService.addFavoriteSport(itemId);
    console.log(items);
  }
  recogerImagen($event: any) {
    this.files = $event.target.files;
  }

  async onSubmit(pForm: any) {
    let formulario = new FormData();
    if (this.files !== undefined) {
      formulario.append('logo', this.files[0]);
    } else {
      formulario.append('logo', this.sponsor.logo);
    }
    formulario.append('company', pForm.value.company);
    formulario.append('email', pForm.value.email);
    formulario.append('city', pForm.value.city);
    formulario.append('country', pForm.value.country);
    formulario.append('address', pForm.value.address);
    formulario.append('postalcode', pForm.value.postalcode);
    formulario.append('aboutme', pForm.value.aboutme);
    console.log('Esto es el email', pForm.value.email);
    const result = await this.sponsorsService.editSponsor(formulario);
    console.log('sponsor editado', result);
    window.location.reload();
  }

  confirmUpdate() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El perfil se ha actualizado',
      showConfirmButton: false,
      timer: 1500
    });
  }

  deleteConfirm() {
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar tu cuenta?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar'
    }).then(async result => {
      if (result.isConfirmed) {
        Swal.fire('Cuenta eliminada', '', 'success');
        const result = await this.sponsorsService.deleteAccount();
        localStorage.removeItem('token');
        setTimeout(() => {
          if (result.affectedRows) {
            this.router.navigate(['/home']);
          }
        }, 500);
      } else if (result.isDenied) {
        Swal.fire('No se ha podido eliminar la cuenta', '', 'info');
      }
    });
  }
}
