import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocompComponent } from './infocomp.component';

describe('InfocompComponent', () => {
  let component: InfocompComponent;
  let fixture: ComponentFixture<InfocompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfocompComponent]
    });
    fixture = TestBed.createComponent(InfocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
