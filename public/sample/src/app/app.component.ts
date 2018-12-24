import { Component, OnInit } from "@angular/core";
import { TestService } from "./test.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "sample";
  navLinks: Array<{ path: string; isActive: boolean }> = [];

  constructor(private _testService: TestService) {}

  ngOnInit() {
    let navLinks = [
      { path: "/register", isActive: false, label: "Register" },
      { path: "/login", isActive: false, label: "Login" }
    ];

    this.navLinks = navLinks;
  }
}
