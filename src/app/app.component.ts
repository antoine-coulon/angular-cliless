import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log("I am a bootstrapped Angular app!");
  }
}
