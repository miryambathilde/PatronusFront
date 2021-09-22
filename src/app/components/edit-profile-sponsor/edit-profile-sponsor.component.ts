import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sponsor } from 'src/app/interfaces/sponsor.interface';
import { SponsorsService } from 'src/app/services/sponsors.service';
import {​​​​​​ IDropdownSettings }​​​​​​ from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-edit-profile-sponsor',
  templateUrl: './edit-profile-sponsor.component.html',
  styleUrls: ['./edit-profile-sponsor.component.css']
})
export class EditProfileSponsorComponent implements OnInit {

  sponsor: any = {};
  files: any;

  dropdownList = [] as any;
  selectedItems = [] as any;
  dropdownSettings: IDropdownSettings = {};

  constructor( 
    private sponsorsService: SponsorsService,
    private router: Router ) {

      

     }

  async ngOnInit() {
    this.sponsor = await this.sponsorsService.getSponsor();


    this.selectedItems = await this.sponsorsService.getFavoritesSponsor();

 
     setTimeout(async () => {
      this.dropdownList = await this.sponsorsService.getSportsSponsors();
      console.log(this.dropdownList);
    }, 10);
    
  

console.log(this.selectedItems);
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Seleccionar todos',
      unSelectAllText: 'Deseleccionar todos',
      itemsShowLimit: 5,
    };

  }

  onItemSelect(item: any) {​​​​​​
    // const result = this.sponsorsService.addFavoriteSport(valor seleccionados);
  }​​​​​​
  onSelectAll(items: any) {​​​​​​
    // const result = this.sponsorsService.addMultipleFavoriteSport(valor seleccionados);
  }​​​​​​


  recogerImagen($event: any) {
    this.files = $event.target.files
  }

  async onSubmit(pForm: any) {
    let formulario = new FormData();
    if (this.files !== undefined) {
      formulario.append('logo', this.files[0]);
    }
    formulario.append('company', pForm.value.company);
    formulario.append('email', pForm.value.email);
    formulario.append('city', pForm.value.city);
    formulario.append('country', pForm.value.country);
    formulario.append('address', pForm.value.address);
    formulario.append('postalcode', pForm.value.postalcode);
    formulario.append('aboutme', pForm.value.aboutme);
    const result = await this.sponsorsService.editSponsor(formulario);
    console.log('Hola');
  }

  async onDelete() {
    const result = await this.sponsorsService.deleteAccount();
    localStorage.removeItem('token');
    if(result.affectedRows) {
      this.router.navigate(['/home']);
    }
  }

}
