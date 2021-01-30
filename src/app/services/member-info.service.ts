import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'https://api.github.com/users/';

@Injectable({
  providedIn: 'root'
})
export class MemberInfoService {

  constructor(private httpClient: HttpClient) { }

  getMemberFullInfo(login: string): Observable<number> {
    return this.httpClient.get<any>(`${API}${login}`);
  }


}

