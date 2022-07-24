import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <input [id]="myId" type="text" value="Edward">
    <input [disabled]="isDisabled" type="text" value="Garcia" >
  `,
  styleUrls: []
})
export class PropertyBindingComponent implements OnInit {

  public myId = "testId";
  public name = "Edward Garcia"
  public isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }



}
