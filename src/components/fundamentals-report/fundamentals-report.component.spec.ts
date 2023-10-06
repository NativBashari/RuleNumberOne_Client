import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalsReportComponent } from './fundamentals-report.component';

describe('FundamentalsReportComponent', () => {
  let component: FundamentalsReportComponent;
  let fixture: ComponentFixture<FundamentalsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundamentalsReportComponent]
    });
    fixture = TestBed.createComponent(FundamentalsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
