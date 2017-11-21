import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckauthloginComponent } from './checkauthlogin.component';

describe('CheckauthloginComponent', () => {
  let component: CheckauthloginComponent;
  let fixture: ComponentFixture<CheckauthloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckauthloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckauthloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
