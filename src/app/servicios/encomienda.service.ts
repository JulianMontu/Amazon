import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from './seguridad.service';
import { Observable } from 'rxjs';
import { EncomiendaModelo } from '../modelos/encomienda.model';

@Injectable({
  providedIn: 'root'
})
export class EncomiendaService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) {
    this.token = this.seguridadService.getToken();
  }
  url = "https://apiloopbackgrupo27jmb.herokuapp.com/"
  token: string = ''
  store(encomienda: EncomiendaModelo): Observable<EncomiendaModelo> {
    return this.http.post<EncomiendaModelo>(`${this.url}/encomiendas`, {
      descripcion: encomienda.descripcion,
      nombre: encomienda.nombre,
      peso: encomienda.peso,
      tipo: encomienda.tipo,
      presentacion: encomienda.presentacion
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
  getAll(): Observable<EncomiendaModelo[]> {
    return this.http.get<EncomiendaModelo[]>(`${this.url}/encomiendas`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
  update(encomienda: EncomiendaModelo): Observable<EncomiendaModelo> {
    return this.http.patch<EncomiendaModelo>(`${this.url}/encomiendas/${encomienda.id}`, {
      descripcion: encomienda.descripcion,
      nombre: encomienda.nombre,
      peso: encomienda.peso,
      tipo: encomienda.tipo,
      presentacion: encomienda.presentacion
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
  delete(id: string): Observable<EncomiendaModelo[]> {
    return this.http.delete<EncomiendaModelo[]>(`${this.url}/encomiendas/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
  getWithId(id: string): Observable<EncomiendaModelo> {
    return this.http.get<EncomiendaModelo>(`${this.url}/encomiendas/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
}
