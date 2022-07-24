import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  template: `
  This is a ng switch directive - you use this to compare multiple values <br />

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked Red</div>
    <div *ngSwitchCase="'orange'">You picked Orange</div>
    <div *ngSwitchCase="'blue'">You picked Blue</div>
    <div *ngSwitchDefault>Pick again! The color doesn't match!</div>

  </div>

  `,
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent implements OnInit {

  public color = "orange";


  constructor() { }

  ngOnInit(): void {
  }

}
