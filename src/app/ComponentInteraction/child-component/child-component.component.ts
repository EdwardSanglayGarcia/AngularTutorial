import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `

    <h2>Hello {{name}}</h2>
    <button (click)="methodFireEvent()">Send sEvent</button>
  `,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input('parentDatas') public name:any;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  methodFireEvent(){
    this.childEvent.emit('Kumusta Edward?! Child to Parent')
  }

}
