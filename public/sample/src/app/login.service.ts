import { Login } from "./login";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private _httpClient: HttpClient) {}

  login(login: Login) {
    let url = window.location.origin + "/login";

    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this._httpClient.post(url, login, { headers: headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      }),
      catchError(err => throwError(err))
    );
  }
}
