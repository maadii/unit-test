import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-event',
  imports: [],
  templateUrl: './simple-event.component.html',
  styleUrl: './simple-event.component.css'
})
export class SimpleEventComponent {
  clicked = 0;
   buttonClicked = new EventEmitter<number>();

  updateClicked() {
    this.clicked++;
    this.buttonClicked.emit(this.clicked);
    
  }
}
