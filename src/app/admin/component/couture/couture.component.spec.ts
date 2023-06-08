import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutureComponent } from './couture.component';

describe('CoutureComponent', () => {
  let component: CoutureComponent;
  let fixture: ComponentFixture<CoutureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoutureComponent]
    });
    fixture = TestBed.createComponent(CoutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
