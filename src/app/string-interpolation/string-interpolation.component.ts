import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " + name.toUpperCase()}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{methodGreetUser()}}</h2>
    <h2>{{siteURL}}</h2>
  `,
  styleUrls: []
})
export class StringInterpolationComponent implements OnInit {

  public name = "Edward Garcia";
  public siteURL = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  methodGreetUser(){
    return "Hello "+ this.name;
  }



}
