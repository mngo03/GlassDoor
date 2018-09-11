import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3030/company/company");
  }

  getCompanyId(id: string) {
    return this.http.get("http://localhost:3030/company/company/" + id);
  }

  updateCompany(id: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    var url: string = ("http://localhost:3030/company/company/" + id);
    console.log(url);
    console.log(data);
    return this.http.put(url, data, httpOptions);
  }
}
