import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviataComponentComponent } from './aviata-component.component';

describe('AviataComponentComponent', () => {
  let component: AviataComponentComponent;
  let fixture: ComponentFixture<AviataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviataComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
