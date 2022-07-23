import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  template: `
    <input #myInput type="text">
    <button (click) = "methodLogMessage(myInput.value)">Log</button>
  `,
  styles: []
})
export class TemplateReferenceVariablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  methodLogMessage(inputValue : string)
  {
    console.log(inputValue)
  }

}
