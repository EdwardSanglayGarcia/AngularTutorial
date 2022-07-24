import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    From the input, the value goes to the class property <br/>
    From the class, the value goes back to the template<br/>
  <input [(ngModel)]="name">
  {{name}}
  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  public name = "";
  constructor() { }

  ngOnInit(): void {
  }

}
