import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../environments/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiURL = enviroment.API_URL

  constructor(private http:HttpClient) { }

  //Pegar dados da API
  getCard(): Observable<any>{
    return this.http.get<any>(this.apiURL)
  }
}
