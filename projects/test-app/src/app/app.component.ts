import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-app';

  constructor() {}

  ngOnInit() {
    console.log(btoa('hello'));
    console.log(atob(btoa('hello')));
  }
}
