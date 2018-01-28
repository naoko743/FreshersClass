import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesearchComponent } from './filesearch.component';

describe('FilesearchComponent', () => {
  let component: FilesearchComponent;
  let fixture: ComponentFixture<FilesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
