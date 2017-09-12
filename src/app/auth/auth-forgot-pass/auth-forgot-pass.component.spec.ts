import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPassComponent } from './auth-forgot-pass.component';

describe('AuthForgotPassComponent', () => {
  let component: AuthForgotPassComponent;
  let fixture: ComponentFixture<AuthForgotPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthForgotPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
