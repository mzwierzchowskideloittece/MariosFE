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

  public id: string = 'c4f36f00-04c1-43a2-8b3a-41854bce0d78';

  private baseUsersURL: string = "/api/v1/users/";
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

    const url:string = "/api/v1/types";

    return this.http.get<MariosType[]>(url);
  }

  getUsers() {
    const url:string = this.baseUsersURL;

    return this.http.get<User[]>(url);
  }

  addMarios(marios: OutputMarios) {

    const url:string = "/api/v1/marios";
    console.log(marios);

    return this.http.post<OutputMarios>(url, marios).subscribe((data) => {});

  }

}
