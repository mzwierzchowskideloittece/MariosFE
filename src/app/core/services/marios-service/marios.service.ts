import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Marios} from "../../interfaces/marios-interface/marios";
import {User} from "../../interfaces/user-interface/user";
import {MariosType} from "../../interfaces/marios-type-interface/marios-type";
import {OutputMarios} from "../../interfaces/output-marios-interface/output-marios";

@Injectable({
  providedIn: 'root'
})
export class MariosService {

  public id: string = '101ab8a6-da38-49e6-9dba-ae5d22f06cc6';

  private baseURL: string = "api/v1/";
  private baseUsersURL: string = this.baseURL + "users/";
  constructor(private http: HttpClient) { }



  getSentMarios() {

    const url:string = this.baseUsersURL + this.id + "/sent";

    return this.http.get<Marios[]>(url);

  }

  getReceivedMarios() {

    const url:string = this.baseUsersURL + this.id + "/received";

    return this.http.get<Marios[]>(url);

  }

  getLatestMarios() {

    const url:string = this.baseUsersURL + this.id + "/latest";

    return this.http.get<Marios[]>(url);
  }

  getMariosTypes() {

    const url:string = this.baseURL + "types";

    return this.http.get<MariosType[]>(url);
  }

  getUsers() {
    const url:string = this.baseUsersURL;

    return this.http.get<User[]>(url);
  }

  addMarios(marios: OutputMarios) {

    const url:string = this.baseURL + "marios";

    return this.http.post<Marios>(url, marios);

  }

}
