import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  template: `
  <div *ngFor="let color of colors; index as myIndex; first as isFirst; last as isLast; odd as isOdd; even as isEven">
    <h2>{{color}} - {{myIndex}} - {{isFirst}} - {{isLast}} - {{isOdd}} - {{isEven}}</h2>
  </div>
  `,

  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  public colors = ["red","orange","yellow", "green","blue","indigo","violet"];
  constructor() { }

  ngOnInit(): void {
  }

}
