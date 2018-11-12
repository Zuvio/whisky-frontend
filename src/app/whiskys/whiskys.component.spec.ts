import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskysComponent } from './whiskys.component';

describe('WhiskysComponent', () => {
  let component: WhiskysComponent;
  let fixture: ComponentFixture<WhiskysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
