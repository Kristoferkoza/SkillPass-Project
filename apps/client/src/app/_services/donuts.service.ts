import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donut } from '../_models/donut.model';

@Injectable({ providedIn: 'root' })
export class DonutsService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Donut[]> {
    return this.http.get<Donut[]>('api/donuts');
  }
}
