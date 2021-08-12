import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainAdmComponent } from './add-train-adm.component';

describe('AddTrainAdmComponent', () => {
  let component: AddTrainAdmComponent;
  let fixture: ComponentFixture<AddTrainAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
