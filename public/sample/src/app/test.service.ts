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
      name: "abc1",
      email: "abc@gmail.com",
      password: "abc123"
    };

    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this._http.post(url, body, { headers: headers }).pipe(
      map(res => console.log(res)),

      catchError(err => throwError(err))
    );
  }

  getTestLogin() {
    let url = window.location.origin + "/login";
    let body: object = {
      email: "abc@gmail.com",
      password: "abc123"
    };

    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this._http.post(url, body, { headers: headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      }),
      catchError(err => throwError(err))
    );
  }
}
