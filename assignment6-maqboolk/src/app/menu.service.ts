import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  apiurl = environment.apiurl;
  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get(this.apiurl + '/menu');
  }

  getAnItem(itemId) {
    return this.http.get(this.apiurl + '/menu/' + itemId);
  }

}
