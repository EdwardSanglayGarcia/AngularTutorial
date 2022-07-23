import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-component-as-square-brackets]',
  template: `
    <div>Inline Template is working for square brackets!</div>
  `,
  styles: [`
    div{color: red}
  `]
})
export class ComponentAsSquareBracketsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
