import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSheetReportComponent } from './balance-sheet-report.component';

describe('BalanceSheetReportComponent', () => {
  let component: BalanceSheetReportComponent;
  let fixture: ComponentFixture<BalanceSheetReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceSheetReportComponent]
    });
    fixture = TestBed.createComponent(BalanceSheetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
