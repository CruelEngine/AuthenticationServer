import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterService } from "../register.service";
import { Register } from "../register";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _registerService: RegisterService
  ) {}

  ngOnInit() {
    this.registerForm = this._fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  register(register: Register) {
    this._registerService.register(register).subscribe(data => {
      console.log(data);
    });
  }
}
