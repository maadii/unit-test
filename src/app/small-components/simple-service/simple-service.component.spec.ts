import { SimpleServiceComponent } from './simple-service.component';
import { MockService } from '../../mock-service';
import { Observable, of } from 'rxjs';

describe('SimpleServiceComponent', () => {
  let component: SimpleServiceComponent;
  let service: MockService;
  
  beforeEach(() => {
    service = new MockService();
    component = new SimpleServiceComponent(service);
  });

  it('should load items on init', () => {
    let result = [
      { id: 1, name: 'Item 1', description: 'Description 1' },
      { id: 2, name: 'Item 2', description: 'Description 2' }
    ];
    
    spyOn(service, 'getAll').and.callFake((): Observable<any[]> => {
      return of(result);
    });
    
    component.ngOnInit();
    expect(component.items).toEqual(result);
  });
});
