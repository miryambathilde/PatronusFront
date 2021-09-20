import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/sponsors/";
   }

   getSponsor(): Promise<any> {
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-type': 'application/json',
         'Authorization': localStorage.getItem('token')!
       })
     };
     const idSponsor = localStorage.getItem('id');
     return this.httpClient.get<any>(this.baseUrl + idSponsor, httpOptions).toPromise();
   }
  
   getAllAthletes(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'allAthletes', httpOptions).toPromise();
  }


  getAthleteById(pId: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'athletes/' + pId, httpOptions).toPromise();
  }

  getMyAthletes(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    };
    const idSponsor = localStorage.getItem('id');
    return this.httpClient.get<any>(this.baseUrl + 'myathletes/' + idSponsor, httpOptions).toPromise();
  }

  getAllOffersMade(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    };
    const idSponsor = localStorage.getItem('id');
    return this.httpClient.get<any>(this.baseUrl + 'myAllOffers/' + idSponsor, httpOptions).toPromise();
  };


  newOffer(pFormItems: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }; 
    const idSponsor = localStorage.getItem('id');
    return this.httpClient.post<any>(this.baseUrl + 'newOffer/' + idSponsor, pFormItems, httpOptions).toPromise();
  }

  editSponsor(pForm: {company: string, email: string, logo: string}): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    };
    const id = localStorage.getItem('id');
    return this.httpClient.put<any>(this.baseUrl + 'profile/' + id, pForm, httpOptions).toPromise();
  }


}

