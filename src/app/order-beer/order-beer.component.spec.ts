import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBeerComponent } from './order-beer.component';

describe('OrderBeerComponent', () => {
  let component: OrderBeerComponent;
  let fixture: ComponentFixture<OrderBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
