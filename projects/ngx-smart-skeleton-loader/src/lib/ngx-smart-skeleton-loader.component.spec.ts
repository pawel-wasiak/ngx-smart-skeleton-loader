import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartSkeletonLoaderComponent } from './ngx-smart-skeleton-loader.component';

describe('NgxSmartSkeletonLoaderComponent', () => {
  let component: NgxSmartSkeletonLoaderComponent;
  let fixture: ComponentFixture<NgxSmartSkeletonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSmartSkeletonLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmartSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
