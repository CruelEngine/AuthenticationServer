import { Component } from "@angular/core";
import { TestService } from "./test.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "sample";

  constructor(private _testService: TestService) {}

  test() {
    this._testService.getTest().subscribe(res => {
      console.log(res);
    });
  }

  testLogin() {
    this._testService.getTestLogin().subscribe(res => {
      console.log(res);
    });
  }
}
