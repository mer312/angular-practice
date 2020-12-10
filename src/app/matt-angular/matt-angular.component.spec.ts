import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattAngularComponent } from './matt-angular.component';

describe('MattAngularComponent', () => {
  let component: MattAngularComponent;
  let fixture: ComponentFixture<MattAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
