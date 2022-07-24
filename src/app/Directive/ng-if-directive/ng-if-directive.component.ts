import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  template : `
<!--
  <h2 *ngIf="displayName; else elseBlock">Edward Garcia</h2>
-->

<div *ngIf="displayName; then thenBlock; else elseBlock"></div>

  <ng-template #elseBlock>
    <h2>This is Else Block</h2>
  </ng-template>

  <ng-template #thenBlock>
    <h2>This is Then Block</h2>
  </ng-template>


  `,
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {

  displayName = true;

  constructor() { }

  ngOnInit(): void {
  }

}
