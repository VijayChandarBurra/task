import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrormsgsComponent } from './errormsgs.component';

describe('ErrormsgsComponent', () => {
  let component: ErrormsgsComponent;
  let fixture: ComponentFixture<ErrormsgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrormsgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrormsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
