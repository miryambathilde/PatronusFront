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

  sponsor: Sponsor | undefined;
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

    this.dropdownList = await this.sponsorsService.getSportsSponsors();
    console.log(this.dropdownList);
  
    this.selectedItems = await this.sponsorsService.getFavoritesSponsor();
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
    formulario.append('logo', this.files[0]);
    formulario.append('company', pForm.value.company);
    formulario.append('email', pForm.value.email);
    const result = await this.sponsorsService.editSponsor(formulario);
    console.log(result);
  }

  async onDelete() {
    const result = await this.sponsorsService.deleteAccount();
    if(result.affectedRows) {
      this.router.navigate(['/home']);
    }
  }

}
