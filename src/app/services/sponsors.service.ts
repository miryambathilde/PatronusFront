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

  getCountries(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'athletes/countries', httpOptions).toPromise();
  }

  getSports(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'athletes/sports', httpOptions).toPromise();
  }

  getAthleteByCountry(event: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'athletes/filterCountry/' + event, httpOptions).toPromise();
  }


  getAthleteBySport(event: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'athletes/filterSport/' + event, httpOptions).toPromise();
  }


  getAthletesInvertibles(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'athletes/invertibles', httpOptions).toPromise();
  }

  getAthletesNoInvertibles(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'athletes/noInvertibles', httpOptions).toPromise();
  }

  getAthletesByPercentage(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'athletesPercentage', httpOptions).toPromise();
  }

  getAthletesByLimitDate(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    return this.httpClient.get<any>(this.baseUrl + 'athletesLimitdate', httpOptions).toPromise();
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


  addAthleteFavorite(pId: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }; 
    const fk_sponsors = localStorage.getItem('id');
    return this.httpClient.post<any>(this.baseUrl + 'addAthleteFavorite/' + pId, fk_sponsors, httpOptions).toPromise();
  }

  removeAthleteFavorite(pId: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }; 
    const fk_sponsor = localStorage.getItem('id');
    return this.httpClient.put<any>(this.baseUrl + 'removeAthleteFavorite/' + pId, fk_sponsor, httpOptions).toPromise();
  }


  editSponsor(pForm: FormData): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    const id = localStorage.getItem('id');
    return this.httpClient.put<any>(this.baseUrl + 'profile/' + id, pForm, httpOptions).toPromise();
  }


  deleteAccount(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')!
      })
    };
    const idSponsor = localStorage.getItem('id');
    return this.httpClient.put<any>(this.baseUrl + 'deleteAccount/' + idSponsor, null, httpOptions).toPromise();
  }




}

