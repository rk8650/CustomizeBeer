import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBeerShopsComponent } from './local-beer-shops.component';

describe('LocalBeerShopsComponent', () => {
  let component: LocalBeerShopsComponent;
  let fixture: ComponentFixture<LocalBeerShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalBeerShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalBeerShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
