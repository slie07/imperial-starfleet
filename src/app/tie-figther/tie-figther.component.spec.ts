import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TieFigtherComponent } from './tie-figther.component';

describe('TieFigtherComponent', () => {
  let component: TieFigtherComponent;
  let fixture: ComponentFixture<TieFigtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TieFigtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TieFigtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
