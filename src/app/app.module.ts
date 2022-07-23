import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ComponentAsClassComponent } from './component-as-class/component-as-class.component';
import { ComponentAsHTMLComponent } from './component-as-html/component-as-html.component';
import { ComponentAsSquareBracketsComponent } from './component-as-square-brackets/component-as-square-brackets.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComponentAsClassComponent,
    ComponentAsHTMLComponent,
    ComponentAsSquareBracketsComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
