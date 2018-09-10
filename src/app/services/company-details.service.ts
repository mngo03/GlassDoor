import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3030/company/company");
  }

  getCompanyId(id: string) {
    console.log("http://localhost:3030/company/company/" + id);
    return this.http.get("http://localhost:3030/company/company/" + id);
  }
}
