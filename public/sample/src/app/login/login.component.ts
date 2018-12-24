import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Login } from "../login";
import { LoginService } from "../login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, private _loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login(login: Login) {
    this._loginService.login(login).subscribe(data => {
      console.log(data);
    });
  }
}
