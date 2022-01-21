import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs'
import { Developer } from '../interface/developer'

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  developersApi = environment.developersApi

  developer: Developer = {
    id: null,
    name: null,
    email: null,
    phone: null,
    location: null,
    picture: null,
    price: null,
    technology: null,
    description: null,
    experience: null,
    native: null,
    linkedin: null
  }

  constructor(private http: HttpClient) { }

  getDevelopers(): Observable<Developer[]> {
    return this.http.get<Developer[]>(this.developersApi)
  }

  createDeveloper(developer: Developer): Observable<Developer> {
    return this.http.post<Developer>(this.developersApi, developer)
  }

  editDeveloper(developer: Developer): Observable<Developer> {
    return this.http.put<Developer>(`${this.developersApi}${developer.id}`, developer)
  }

  deleteDeveloper(id: string): Observable<string> {
    return this.http.delete<string>(`${this.developersApi}${id}`)
  }
}
