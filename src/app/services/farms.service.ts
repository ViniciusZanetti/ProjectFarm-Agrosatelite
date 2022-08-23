import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Farm } from 'src/models/Farm';

@Injectable({
  providedIn: 'root',
})
export class FarmsService {
  listaFarms: any[];

  private url = 'http://localhost:3000/farms';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
    this.listaFarms = [];
  }

  get transferencias() {
    return this.listaFarms;
  }

  listFarmAll(): Observable<Farm[]>{
    return this.httpClient.get<Farm[]>(this.url)
  }

  createFarm(farm: any): Observable<Farm> {
    this.hidrate(farm);
    return this.httpClient.post<Farm>(this.url, farm);
  }

  private hidrate(farm: any) {
    farm.data = new Date();
  }

  editFarm(farm: Farm): Observable<Farm> {
    return this.httpClient.put<Farm>(this.url, farm);
  }

  remove(id: number){
    return this.httpClient.delete<Farm>(`${this.url}/${id}`, this.httpOptions)
  }

}
