import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReditComponent } from './home-redit.component';

describe('HomeReditComponent', () => {
  let component: HomeReditComponent;
  let fixture: ComponentFixture<HomeReditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeReditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
