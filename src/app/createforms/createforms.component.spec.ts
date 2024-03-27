import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateformsComponent } from './createforms.component';

describe('CreateformsComponent', () => {
  let component: CreateformsComponent;
  let fixture: ComponentFixture<CreateformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
