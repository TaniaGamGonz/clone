import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeaderDropdownComponent } from './user-header-dropdown.component';

describe('UserHeaderDropdownComponent', () => {
  let component: UserHeaderDropdownComponent;
  let fixture: ComponentFixture<UserHeaderDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHeaderDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeaderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
