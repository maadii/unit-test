import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFunctionComponent } from './simple-function.component';
import { FormBuilder } from '@angular/forms';

describe('SimpleFunctionComponent', () => {
  let component: SimpleFunctionComponent;


  beforeEach(() => {
    component = new SimpleFunctionComponent( new FormBuilder());});
    it('Should create a form with 2 ', () => {
      expect(component.from.contains("name")).toBeTruthy();
       expect(component.from.contains("email")).toBeTruthy();
    })
    it('Should create a form with 2 ', () => {
      let contorl= component.from.get("name");
      contorl?.setValue("");
       expect(contorl?.valid).toBeFalsy();
    })

});
