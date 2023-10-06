import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFloeReportComponent } from './cash-floe-report.component';

describe('CashFloeReportComponent', () => {
  let component: CashFloeReportComponent;
  let fixture: ComponentFixture<CashFloeReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashFloeReportComponent]
    });
    fixture = TestBed.createComponent(CashFloeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
