import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AviataServiceService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:9080/aviata/team'
   }

   public getTeamDetails(){
     console.log('Inside Team dEtails')
    return this.http.get(this.url);
  }
}
