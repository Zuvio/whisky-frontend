import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskyDetailComponent } from './whisky-detail.component';

describe('WhiskyDetailComponent', () => {
  let component: WhiskyDetailComponent;
  let fixture: ComponentFixture<WhiskyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
