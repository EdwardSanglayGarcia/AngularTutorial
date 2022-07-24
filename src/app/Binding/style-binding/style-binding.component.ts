import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
  <h2>Welcome {{name}}</h2>
  <h2 [style.color]="'blue'">Style Binding</h2>
  <h2 [style.color]="hasError ? 'red' : 'blue'">Style Binding</h2>
  <h2 [style.color]="highlightColor">Style Binding</h2>
  <h2 [ngStyle]="titleStyles">ngStyle</h2>
  `,
  styles: [``]
})
export class StyleBindingComponent implements OnInit {

  public name = "Edward Garcia";
  public hasError = true;
  public  isSpecial = true;
  public highlightColor = "maroon";
  public titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
