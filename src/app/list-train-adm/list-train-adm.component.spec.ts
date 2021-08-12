import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainAdmComponent } from './list-train-adm.component';

describe('ListTrainAdmComponent', () => {
  let component: ListTrainAdmComponent;
  let fixture: ComponentFixture<ListTrainAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrainAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrainAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
