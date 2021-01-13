import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from  'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class MakeService {

  constructor(private http: HttpClient) { }

  getMakes(){
    return this.http.get('/api/makes');
  }
 
}
