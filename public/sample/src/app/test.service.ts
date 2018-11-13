import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TestService {
  constructor(private _http: HttpClient) {}

  getTest() {
    let url = window.location.origin + "/register";
    let body: object = {
      firstName: "abc1",
      lastName: "abc2",
      email: "abc@gmail.com"
    };

    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this._http.post(url, body, { headers: headers }).pipe(
      map(res => console.log(res)),
      catchError(err => throwError(err))
    );
  }
}
