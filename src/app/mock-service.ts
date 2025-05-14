import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

export interface MockItem {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockService {
  private items: MockItem[] = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' }
  ];

  create(item: Omit<MockItem, 'id'>): Observable<MockItem> {
    const newItem: MockItem = {
      ...item,
      id: this.getNextId()
    };
    this.items.push(newItem);
    return of(newItem);
  }

  getAll(): Observable<MockItem[]> {
    return of(this.items);
  }

  getById(id: number): Observable<MockItem> {
    const item = this.items.find(i => i.id === id);
    return item ? of(item) : throwError(() => new Error('Item not found'));
  }

  update(id: number, changes: Partial<MockItem>): Observable<MockItem> {
    const index = this.items.findIndex(i => i.id === id);
    if (index === -1) {
      return throwError(() => new Error('Item not found'));
    }

    this.items[index] = { ...this.items[index], ...changes };
    return of(this.items[index]);
  }

  delete(id: number): Observable<void> {
    const index = this.items.findIndex(i => i.id === id);
    if (index === -1) {
      return throwError(() => new Error('Item not found'));
    }

    this.items.splice(index, 1);
    return of(void 0);
  }

  private getNextId(): number {
    return Math.max(...this.items.map(item => item.id), 0) + 1;
  }
}