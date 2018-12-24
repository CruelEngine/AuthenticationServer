import { Register } from "./register";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private _httpClient: HttpClient) {}

  register(register: Register) {
    let url = window.location.origin + "/register";

    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this._httpClient.post(url, register, { headers: headers }).pipe(
      map(res => console.log(res)),

      catchError(err => throwError(err))
    );
  }
}
