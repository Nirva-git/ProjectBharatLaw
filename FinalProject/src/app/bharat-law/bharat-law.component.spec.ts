import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BharatLawComponent } from './bharat-law.component';

describe('BharatLawComponent', () => {
  let component: BharatLawComponent;
  let fixture: ComponentFixture<BharatLawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BharatLawComponent]
    });
    fixture = TestBed.createComponent(BharatLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
