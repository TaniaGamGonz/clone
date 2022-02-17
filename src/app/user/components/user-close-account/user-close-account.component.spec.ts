import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCloseAccountComponent } from './user-close-account.component';

describe('UserCloseAccountComponent', () => {
  let component: UserCloseAccountComponent;
  let fixture: ComponentFixture<UserCloseAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCloseAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCloseAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
