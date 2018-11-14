import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskyAddComponent } from './whisky-add.component';

describe('WhiskyAddComponent', () => {
  let component: WhiskyAddComponent;
  let fixture: ComponentFixture<WhiskyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
