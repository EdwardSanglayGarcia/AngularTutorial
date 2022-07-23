import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2 class="text-success">Success</h2>
    <h2 [class]="successClass">Success Class</h2>
    <h2 class="text-special" [class]="successClass">Special</h2>
    <h2 [class.text-danger]="hasError">Is there an error?</h2>

    <h1 [ngClass]="messageClasses">This is directive section</h1>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {

  public name = "Edward Garcia";
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

}
