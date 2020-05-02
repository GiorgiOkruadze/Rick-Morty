import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { stat } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class WebClientService {
  private baseUrl:string = 'https://rickandmortyapi.com';

  constructor(private httpClient:HttpClient) { }

  public getCharactersApiData():any{
    let fullUrl:string = `${this.baseUrl}/api/character`;
    return this.httpClient.get(fullUrl)
    .pipe(map(response => {
      return response;
    }))
  }

  public getAlterEgos(name:string,status:string)
  {
    let fullUrl:string = `${this.baseUrl}/api/character?name=${name}&status=${status}`;
    return this.httpClient.get(fullUrl)
    .pipe(map(response => {
      return response;
    }))
  }

}
