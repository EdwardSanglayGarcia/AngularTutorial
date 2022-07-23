import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template : `
    <!--<button (click)="methodOnClick()">Greet</button>-->

    <button (click)="methodOnClick($event)">Greet Event</button>
    <button (click)="greeting='Welcome Edward'">Greet Property</button>
    {{greeting}}
  `,
  styles : []
})
export class EventBindingComponent implements OnInit {

  public greeting = "";

  constructor() { }

  ngOnInit(): void {
  }

  methodOnClick(event :any){
    console.log(event);
    this.greeting = event.type;

  }

}
