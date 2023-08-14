import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnNavComponent } from './user-on-nav.component';

describe('UserOnNavComponent', () => {
  let component: UserOnNavComponent;
  let fixture: ComponentFixture<UserOnNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOnNavComponent]
    });
    fixture = TestBed.createComponent(UserOnNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
