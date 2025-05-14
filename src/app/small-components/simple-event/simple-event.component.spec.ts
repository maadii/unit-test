import { SimpleEventComponent } from './simple-event.component';

describe('SimpleEventComponent', () => {
  let component: SimpleEventComponent;

  beforeEach(() => {
    component = new SimpleEventComponent();
  });

  it('should emit clicked value when button is clicked', () => {
    let clickedValue = 0;
    component.buttonClicked.subscribe((value: number) => {clickedValue = value;});
    component.updateClicked();
    expect(clickedValue).toBe(1);
  });
});
