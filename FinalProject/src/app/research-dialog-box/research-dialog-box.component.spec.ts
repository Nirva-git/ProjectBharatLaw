import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDialogBoxComponent } from './research-dialog-box.component';

describe('ResearchDialogBoxComponent', () => {
  let component: ResearchDialogBoxComponent;
  let fixture: ComponentFixture<ResearchDialogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchDialogBoxComponent]
    });
    fixture = TestBed.createComponent(ResearchDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
