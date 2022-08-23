import { Owner } from './../../models/Owner';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  listOwner: any[];

  private url = 'http://localhost:3000/Owner';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
    this.listOwner = [];
  }

  get transferencias() {
    return this.listOwner;
  }

  listOwnerAll(): Observable<Owner[]>{
    return this.httpClient.get<Owner[]>(this.url)
  }

  createOwner(owner: any): Observable<Owner> {
    return this.httpClient.post<Owner>(this.url, owner);
  }

  editOwner(owner: Owner): Observable<Owner> {
    return this.httpClient.put<Owner>(`${this.url}/${owner}`, this.httpOptions);
  }

  removeOwner(id: number){
    return this.httpClient.delete<Owner>(`${this.url}/${id}`, this.httpOptions)
  }

}
