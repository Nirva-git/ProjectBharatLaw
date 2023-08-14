import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBookDashbordComponent } from './research-book-dashbord.component';

describe('ResearchBookDashbordComponent', () => {
  let component: ResearchBookDashbordComponent;
  let fixture: ComponentFixture<ResearchBookDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchBookDashbordComponent]
    });
    fixture = TestBed.createComponent(ResearchBookDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
