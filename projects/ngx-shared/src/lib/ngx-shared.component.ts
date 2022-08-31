import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-shared',
  template: `<p>ngx-shared works!</p>`,
  styles: [],
})
export class NgxSharedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(btoa('hello'));
    console.log(atob(btoa('hello')));
  }
}
