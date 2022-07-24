import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentAsClassComponent } from './ComponentTypes/component-as-class/component-as-class.component';
import { ComponentAsHTMLComponent } from './ComponentTypes/component-as-html/component-as-html.component';
import { ComponentAsSquareBracketsComponent } from './ComponentTypes/component-as-square-brackets/component-as-square-brackets.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './Binding/property-binding/property-binding.component';
import { ClassBindingComponent } from './Binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './Binding/style-binding/style-binding.component';
import { EventBindingComponent } from './Binding/event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './Binding/two-way-binding/two-way-binding.component';

import {FormsModule} from "@angular/forms";
import { NgIfDirectiveComponent } from './Directive/ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './Directive/ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './Directive/ng-for-directive/ng-for-directive.component';
import { ParentComponentComponent } from './ComponentInteraction/parent-component/parent-component.component';
import { ChildComponentComponent } from './ComponentInteraction/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAsClassComponent,
    ComponentAsHTMLComponent,
    ComponentAsSquareBracketsComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent,
    ParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
