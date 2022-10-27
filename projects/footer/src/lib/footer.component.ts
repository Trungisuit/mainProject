import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-footer',
  template: ` <p>Thân công báo</p> `,
  styles: [
    `
      <p > {
        background-color: red;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
