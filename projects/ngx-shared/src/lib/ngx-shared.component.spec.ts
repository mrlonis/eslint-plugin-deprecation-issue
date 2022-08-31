import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSharedComponent } from './ngx-shared.component';

describe('NgxSharedComponent', () => {
  let component: NgxSharedComponent;
  let fixture: ComponentFixture<NgxSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
