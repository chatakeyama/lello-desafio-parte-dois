import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'https://api.github.com/orgs/angular/public_members';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {  

  constructor(private httpClient: HttpClient) {}

  listMembers(): Observable<any>{
    return this.httpClient.get<any>(API)
  }

}
