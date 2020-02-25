import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OjasService {

  constructor(private ht: HttpClient) { }

  getDetails() {
   return this.ht.get('http://localhost:3000/posts');
  }
  po(d) {
    return this.ht.post('http://localhost:3000/posts', d);
  }
}
