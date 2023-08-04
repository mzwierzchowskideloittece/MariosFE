import {Injectable, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Marios} from "../../interfaces/marios-interface/marios";
import {map, Observable} from "rxjs";
import {User} from "../../interfaces/user-interface/user";

@Injectable({
  providedIn: 'root'
})
export class MariosService {

  public id: string = '3b8eb322-c163-4cb2-8a68-242523c1165d';

  private mariosList = [
    {
      sentOrReceived: "sent",
      name: "Angela Marcus",
      type: "Thank you",
      title: "You did great today Monica!",
      comment: "I wanted to give you marios for your excellent team leadership",
      creationDate: "2023-08-04 10:30:00.090519"
    }
  ];
  constructor(private http: HttpClient) { }



  getSentMarios() {

    const url:string = "/api/v1/users/" + this.id + "/sent";

    return this.http.get<Marios[]>(url);
  }

  getReceivedMarios() {

    const url:string = "/api/v1/users/" + this.id + "/received";

    return this.http.get<Marios[]>(url);

  }

  getLatestMarios() {

    const url:string = "/api/v1/users/" + this.id + "/latest";

    return this.http.get<Marios[]>(url);
  }

  getUsers() {
    const url:string = "/api/v1/users/" + this.id + "/latest";

    return this.http.get<Marios[]>(url);
  }

}
