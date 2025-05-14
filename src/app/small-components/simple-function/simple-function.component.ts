import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-function',
  imports: [],
  templateUrl: './simple-function.component.html',
  styleUrl: './simple-function.component.css'
})
export class SimpleFunctionComponent {
  from: FormGroup; // Changed from FormBuilder to FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.from = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
