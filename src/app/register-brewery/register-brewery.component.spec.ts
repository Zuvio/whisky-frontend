import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBreweryComponent } from './register-brewery.component';

describe('RegisterBreweryComponent', () => {
  let component: RegisterBreweryComponent;
  let fixture: ComponentFixture<RegisterBreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
