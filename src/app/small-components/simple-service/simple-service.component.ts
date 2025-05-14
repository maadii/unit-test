import { Component, OnInit } from '@angular/core';
import { MockService, MockItem } from '../../mock-service';

@Component({
  selector: 'app-simple-service',
  imports: [],
  templateUrl: './simple-service.component.html',
  styleUrl: './simple-service.component.css'
})
export class SimpleServiceComponent implements OnInit {
  items: MockItem[] = [];

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(): void {
    this.mockService.getAll().subscribe(items => this.items = items);
  }

  getItemById(id: number): void {
    this.mockService.getById(id).subscribe(item => console.log('Found item:', item));
  }

  addItem(name: string, description: string): void {
    this.mockService.create({ name, description })
      .subscribe(newItem => this.items.push(newItem));
  }

  deleteItem(id: number): void {
    this.mockService.delete(id)
      .subscribe(() => this.items = this.items.filter(item => item.id !== id));
  }
}
