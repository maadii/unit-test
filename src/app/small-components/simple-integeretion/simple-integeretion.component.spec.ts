import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleIntegeretionComponent } from './simple-integeretion.component';

describe('SimpleIntegeretionComponent', () => {
  let component: SimpleIntegeretionComponent;
  let fixture: ComponentFixture<SimpleIntegeretionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleIntegeretionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleIntegeretionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize total to 0', () => {
    expect(component.total).toBe(0);
  });

  it('should increment total when increment is called', () => {
    component.increment();
    expect(component.total).toBe(1);
  });

  it('should decrement total when decrement is called and total > 0', () => {
    component.total = 1;
    component.decrement();
    expect(component.total).toBe(0);
  });

  it('should not decrement total when total is 0', () => {
    component.total = 0;
    component.decrement();
    expect(component.total).toBe(0);
  });

  it('should update the view when total changes', () => {
    component.increment();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('1');
  });
});
